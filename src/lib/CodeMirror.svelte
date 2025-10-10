<script lang="ts" module>
    export type ThemeSpec = Record<string, StyleSpec>;
    export type StyleSpec = {
        [propOrSelector: string]: string | number | StyleSpec | null;
    };

    export type CodeMirrorProps = {
        /** The value that will be displayed and edited in the CodeMirror editor. */
        value?: string | null | undefined;
        /** Class value to add additional css classes to CodeMirror editor. */
        class?: ClassValue;

        /** The language extension that will parse and highlight the value. */
        lang?: LanguageSupport | null | undefined;
        /** The theme extension to customize the appearence of the editor. */
        theme?: Extension | null | undefined;

        /** The placeholder text or element to show when the editor is empty. */
        placeholder?: string | HTMLElement | null | undefined;
        /** Whether to make the editor editable or not. */
        editable?: boolean;
        /** Whether to make the editor readonly or not. */
        readonly?: boolean;
        /** Whether to allow multi-selecting text. */
        allowMultiSelect?: boolean;
        /** Whether to use the `Tab` shortcut to handle indentation. */
        useTab?: boolean;
        /** The number of space of an indentation level. */
        tabSize?: number;
        /** Whether to wrap lines in the editor or not. */
        lineWrapping?: boolean;

        /** Whether to show line numbers or not. */
        lineNumbers?: boolean | LineNumberConfig;
        /** Highlighting options. */
        highlight?: {
            /** Whether to highlight the active line. */
            activeLine?: boolean;
            /** Whether to highlight the active line gutter. */
            activeLineGutter?: boolean;
            /** Highlight special characters. */
            specialChars?: boolean | SpecialCharConfig;
            /** Highlight selection matches. */
            selectionMatches?: boolean | SelectionMatchesConfig;
        };
        /** Enable/disable and/or configure history. */
        history?: boolean | HistoryConfig;
        /** Enable/disable and/or configure fold gutter. */
        foldGutter?: boolean | FoldGutterConfig;
        /** Enable/disable and/or configure draw selection. */
        drawSelection?: boolean | DrawSelectionConfig;
        /** Whether to show the drop cursor. */
        dropCursor?: boolean;
        /** Whether to indent on input. */
        indentOnInput?: boolean;
        /** Enable/disable and/or configure syntax highlighting. */
        syntaxHighlighting?: boolean | { highlighter?: Highlighter; fallback?: boolean };
        /** Enable/disable and/or configure bracket matching. */
        bracketMatching?: boolean | BracketMatchingConfig;
        /** Whether to close brackets automatically. */
        closeBrackets?: boolean;
        /** Enable/disable and/or configure autocompletion. */
        autocompletion?: boolean | CompletionConfig;
        /** Enable/disable and/or configure rectangular selection. */
        rectangularSelection?: boolean | RectangularSelectionConfig;
        /** Enable/disable and/or configure crosshair cursor. */
        crosshairCursor?: boolean | CrosshairCursorConfig;

        /** Additional extensions to inject in the editor.*/
        extensions?: Extension[];
        /** Additional keybindings to register. */
        keybindings?: KeyBinding[];
        /** In-place theme configuration. */
        styles?: ThemeSpec | null | undefined;

        /** Disable onchange debounce (warning: impact performance). */
        nodebounce?: boolean;

        /** Trigger when the code changes. */
        onchange?: (value: string) => void;
        /** Trigger when the editor is ready. Allows to retrieve the `EditorView` instance. */
        onready?: (view: EditorView) => void;
        /** Trigger when the editor is reconfiguring because of props update. */
        onreconfigure?: (view: EditorView) => void;
    };

    export type LineNumberConfig = Parameters<typeof lineNumbersExt>[0] & {};
    export type SpecialCharConfig = Parameters<typeof highlightSpecialChars>[0] & {};
    export type SelectionMatchesConfig = Parameters<typeof highlightSelectionMatches>[0] & {};
    export type HistoryConfig = Parameters<typeof historyExt>[0] & {};
    export type FoldGutterConfig = Parameters<typeof foldGutterExt>[0] & {};
    export type DrawSelectionConfig = Parameters<typeof drawSelectionExt>[0] & {};
    export type Highlighter = Parameters<typeof syntaxHighlightingExt>[0] & {};
    export type BracketMatchingConfig = Parameters<typeof bracketMatchingExt>[0] & {};
    export type CompletionConfig = Parameters<typeof autocompletionExt>[0] & {};
    export type RectangularSelectionConfig = Parameters<typeof rectangularSelectionExt>[0] & {};
    export type CrosshairCursorConfig = Parameters<typeof crosshairCursorExt>[0] & {};
</script>

<script lang="ts">
    import type { ClassValue } from "svelte/elements";

    import { onDestroy, onMount, untrack } from "svelte";
    import { debounce } from "./util";

    import {
        autocompletion as autocompletionExt,
        closeBrackets as closeBracketsExt,
        closeBracketsKeymap,
        completionKeymap,
    } from "@codemirror/autocomplete";
    import { defaultKeymap, history as historyExt, historyKeymap, indentWithTab } from "@codemirror/commands";
    import {
        bracketMatching as bracketMatchingExt,
        defaultHighlightStyle,
        foldGutter as foldGutterExt,
        foldKeymap,
        indentOnInput as indentOnInputExt,
        indentUnit,
        syntaxHighlighting as syntaxHighlightingExt,
        type LanguageSupport,
    } from "@codemirror/language";
    import { lintKeymap } from "@codemirror/lint";
    import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
    import { EditorState, StateEffect, type Extension } from "@codemirror/state";
    import {
        crosshairCursor as crosshairCursorExt,
        drawSelection as drawSelectionExt,
        dropCursor as dropCursorExt,
        EditorView,
        highlightActiveLine,
        highlightActiveLineGutter,
        highlightSpecialChars,
        keymap,
        lineNumbers as lineNumbersExt,
        placeholder as placeholderExt,
        rectangularSelection as rectangularSelectionExt,
        type KeyBinding,
    } from "@codemirror/view";

    let {
        value = $bindable(""),
        lang,
        theme,
        extensions = [],
        keybindings = [],
        allowMultiSelect = true,
        useTab = true,
        tabSize = 2,
        lineWrapping = false,
        lineNumbers = true,
        highlight = { activeLine: true, activeLineGutter: true, specialChars: true, selectionMatches: true },
        history = true,
        foldGutter = true,
        drawSelection = true,
        dropCursor = true,
        indentOnInput = true,
        syntaxHighlighting = true,
        bracketMatching = true,
        closeBrackets = true,
        autocompletion = true,
        rectangularSelection = true,
        crosshairCursor = true,
        styles,
        editable = true,
        readonly = false,
        placeholder,
        nodebounce = false,
        class: classes = "",
        onchange,
        onready,
        onreconfigure,
    }: CodeMirrorProps = $props();

    const is_browser = typeof window !== "undefined";

    let element = $state<HTMLDivElement>();
    let view = $state<EditorView>();

    let update_from_prop = $state(false);
    let update_from_state = $state(false);
    let first_config = $state(true);
    let first_update = $state(true);

    let state_extensions = $derived([...get_base_extensions(), ...get_theme(), ...extensions]);

    $effect(() => {
        //eslint-disable-next-line @typescript-eslint/no-unused-expressions
        value;
        if (view) untrack(() => update(value));
    });
    $effect(() => {
        if (view && state_extensions) untrack(reconfigure);
    });

    let on_change = $derived(nodebounce ? handle_change : debounce(handle_change, 300));

    onMount(() => {
        view = create_editor_view();
        onready?.(view);
    });
    onDestroy(() => view?.destroy());

    function create_editor_view(): EditorView {
        return new EditorView({
            parent: element,
            state: create_editor_state(value),
            dispatch(transaction) {
                if (!view) return;

                view.update([transaction]);

                if (!update_from_prop && transaction.docChanged) {
                    on_change();
                }
            },
        });
    }

    function reconfigure(): void {
        if (first_config) {
            first_config = false;
            return;
        }

        if (view) {
            view.dispatch({
                effects: StateEffect.reconfigure.of(state_extensions),
            });

            onreconfigure?.(view);
        }
    }

    function update(value: string | null | undefined): void {
        if (first_update) {
            first_update = false;
            return;
        }

        if (update_from_state) {
            update_from_state = false;
            return;
        }

        update_from_prop = true;

        view!.setState(create_editor_state(value));

        update_from_prop = false;
    }

    function handle_change(): void {
        if (view) {
            const new_value = view.state.doc.toString();
            if (new_value === value) return;

            update_from_state = true;

            value = new_value;
            onchange?.(value);
        }
    }

    function create_editor_state(value: string | null | undefined): EditorState {
        return EditorState.create({
            doc: value ?? undefined,
            extensions: state_extensions,
        });
    }

    function get_base_extensions(): Extension[] {
        const extensions: Extension[] = [
            indentUnit.of(" ".repeat(tabSize)),
            EditorView.editable.of(editable),
            EditorState.readOnly.of(readonly),
            EditorState.allowMultipleSelections.of(allowMultiSelect),
        ];

        const key_bindings: KeyBinding[] = [...keybindings, ...defaultKeymap, ...searchKeymap, ...lintKeymap];

        if (useTab) key_bindings.push(indentWithTab);

        if (lineNumbers) extensions.push(lineNumbersExt(lineNumbers === true ? undefined : lineNumbers));
        if (highlight.activeLine) extensions.push(highlightActiveLine());
        if (highlight.activeLineGutter) extensions.push(highlightActiveLineGutter());
        if (dropCursor) extensions.push(dropCursorExt());
        if (indentOnInput) extensions.push(indentOnInputExt());
        if (placeholder) extensions.push(placeholderExt(placeholder));
        if (lang) extensions.push(lang);
        if (lineWrapping) extensions.push(EditorView.lineWrapping);

        if (highlight.specialChars) {
            extensions.push(
                highlightSpecialChars(highlight.specialChars === true ? undefined : highlight.specialChars)
            );
        }
        if (highlight.selectionMatches) {
            extensions.push(
                highlightSelectionMatches(highlight.selectionMatches === true ? undefined : highlight.selectionMatches)
            );
        }
        if (history) {
            extensions.push(history === true ? historyExt() : historyExt(history));
            key_bindings.push(...historyKeymap);
        }
        if (foldGutter) {
            extensions.push(foldGutter === true ? foldGutterExt() : foldGutterExt(foldGutter));
            key_bindings.push(...foldKeymap);
        }
        if (drawSelection) {
            extensions.push(drawSelection === true ? drawSelectionExt() : drawSelectionExt(drawSelection));
        }
        if (syntaxHighlighting) {
            if (syntaxHighlighting === true) {
                extensions.push(syntaxHighlightingExt(defaultHighlightStyle, { fallback: true }));
            } else {
                const { highlighter = defaultHighlightStyle, fallback = true } = syntaxHighlighting;
                extensions.push(syntaxHighlightingExt(highlighter, { fallback }));
            }
        }
        if (bracketMatching) {
            extensions.push(bracketMatchingExt(bracketMatching === true ? undefined : bracketMatching));
        }
        if (closeBrackets) {
            extensions.push(closeBracketsExt());
            key_bindings.push(...closeBracketsKeymap);
        }
        if (autocompletion) {
            extensions.push(autocompletionExt(autocompletion === true ? undefined : autocompletion));
            key_bindings.push(...completionKeymap);
        }
        if (rectangularSelection) {
            extensions.push(rectangularSelectionExt(rectangularSelection === true ? undefined : rectangularSelection));
        }
        if (crosshairCursor) {
            extensions.push(crosshairCursorExt(crosshairCursor === true ? undefined : crosshairCursor));
        }

        extensions.push(keymap.of(key_bindings));

        return extensions;
    }

    function get_theme(): Extension[] {
        const extensions: Extension[] = [];
        if (styles) extensions.push(EditorView.theme(styles));
        if (theme) extensions.push(theme);
        return extensions;
    }
</script>

{#if is_browser}
    <div class={["codemirror-wrapper", classes]} bind:this={element}></div>
{:else}
    <div class={["scm-waiting", classes]}>
        <div class="scm-waiting__loading scm-loading">
            <div class="scm-loading__spinner"></div>
            <p class="scm-loading__text">Loading editor...</p>
        </div>

        <pre class="scm-pre cm-editor">{value}</pre>
    </div>
{/if}

<style>
    .codemirror-wrapper :global(.cm-focused) {
        outline: none;
    }

    .scm-waiting {
        position: relative;
    }
    .scm-waiting__loading {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.5);
    }

    .scm-loading {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .scm-loading__spinner {
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        border: solid 2px #000;
        border-top-color: transparent;
        margin-right: 0.75rem;
        animation: spin 1s linear infinite;
    }
    .scm-loading__text {
        font-family: sans-serif;
    }
    .scm-pre {
        font-size: 0.85rem;
        font-family: monospace;
        tab-size: 2;
        -moz-tab-size: 2;
        resize: none;
        pointer-events: none;
        user-select: none;
        overflow: auto;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
