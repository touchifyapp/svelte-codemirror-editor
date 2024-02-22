<script
	lang="ts"
	context="module">
	export type ThemeSpec = Record<string, StyleSpec>;
	export type StyleSpec = {
		[propOrSelector: string]: string | number | StyleSpec | null;
	};

	export type CodeMirrorProps = {
		value?: string | null | undefined;
		basic?: boolean;
		lang: LanguageSupport | null | undefined;
		theme?: Extension | null | undefined;
		extensions?: Extension[];
		useTab?: boolean;
		tabSize?: number;
		styles?: ThemeSpec | null | undefined;
		lineWrapping?: boolean;
		editable?: boolean;
		readonly?: boolean;
		placeholder?: string | HTMLElement | null | undefined;
		nodeBounce?: boolean;
		onCodeMirrorChange?: () => void;
	};
</script>

<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { basicSetup } from 'codemirror';
	// import * as base16Dark from './base16-dark.css?inline';
	import {
		EditorView,
		keymap,
		placeholder as placeholderExt,
	} from '@codemirror/view';
	import {
		EditorState,
		StateEffect,
		type Extension,
	} from '@codemirror/state';
	import { indentWithTab } from '@codemirror/commands';
	import { indentUnit, type LanguageSupport } from '@codemirror/language';
	import { debounce } from './util';

	let {
		value,
		basic = true,
		lang,
		theme,
		extensions,
		useTab = true,
		tabSize = 2,
		styles,
		lineWrapping = false,
		editable = true,
		readonly = false,
		placeholder,
		nodeBounce = true,
		onCodeMirrorChange,
	} = $props<CodeMirrorProps>();
	let classes = '';

	export { classes as class };

	const is_browser = typeof window !== 'undefined';

	let element: HTMLDivElement | null = $state(null);
	let view: EditorView;
	$effect(() => {
		const dispatch = (newValue: string) => {
			if (typeof onCodeMirrorChange === 'function' && element !== null) {				
				onCodeMirrorChange();
			}
		};

		let update_from_prop = false;
		let update_from_state = false;
		let first_config = true;
		let first_update = true;
		let state_extensions = $state([
			...get_base_extensions(
				basic,
				useTab,
				tabSize,
				lineWrapping,
				placeholder,
				editable,
				readonly,
				lang
			),
			...get_theme(theme, styles),
			...(extensions ?? []),
		]);
		$effect(() => {
			view && update(value);
		});

		$effect(() => {
			view && state_extensions && reconfigure();
		});

		let on_change = $derived(
			nodeBounce ? handle_change : debounce(handle_change, 300)
		);

		onMount(() => (view = create_editor_view()));

		onDestroy(() => view?.destroy());

		function create_editor_view(): EditorView {
			return new EditorView({
				parent: element!,
				state: create_editor_state(value),
				dispatch(transaction) {
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
			if (state_extensions !== undefined) {
				view.dispatch({
					effects: StateEffect.reconfigure.of(state_extensions),
				});
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

			view.setState(create_editor_state(value));

			update_from_prop = false;
		}

		function handle_change(): void {
			const new_value = view.state.doc.toString();
			if (new_value === value) return;

			update_from_state = true;

			value = new_value;
			dispatch(value);
		}

		function create_editor_state(
			value: string | null | undefined
		): EditorState {
			return EditorState.create({
				doc: value ?? undefined,
				extensions: state_extensions,
			});
		}

		function get_base_extensions(
			basic: boolean,
			useTab: boolean,
			tabSize: number,
			lineWrapping: boolean,
			placeholder: string | HTMLElement | null | undefined,
			editable: boolean,
			readonly: boolean,
			lang: LanguageSupport | null | undefined
		): Extension[] {
			const extensions: Extension[] = [
				indentUnit.of(' '.repeat(tabSize)),
				EditorView.editable.of(editable),
				EditorState.readOnly.of(readonly),
			];

			if (basic) extensions.push(basicSetup);
			if (useTab) extensions.push(keymap.of([indentWithTab]));
			if (placeholder) extensions.push(placeholderExt(placeholder));
			if (lang) extensions.push(lang);
			if (lineWrapping) extensions.push(EditorView.lineWrapping);

			return extensions;
		}

		function get_theme(
			theme: Extension | null | undefined,
			styles: ThemeSpec | null | undefined
		): Extension[] {
			const extensions: Extension[] = [];
			if (styles) extensions.push(EditorView.theme(styles));

			if (theme) extensions.push(theme);
			return extensions;
		}
	});
</script>

{#if is_browser}
	<div
		class="codemirror-wrapper {classes}"
		bind:this={element} />
{:else}
	<div class="scm-waiting {classes}">
		<div class="scm-waiting__loading scm-loading">
			<div class="scm-loading__spinner" />
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
