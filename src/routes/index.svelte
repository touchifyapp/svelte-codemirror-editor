<script lang="ts">
    import CodeMirror from "$lib";

    import { css } from "@codemirror/lang-css";
    import { html } from "@codemirror/lang-html";
    import { javascript } from "@codemirror/lang-javascript";
    import { oneDark } from "@codemirror/theme-one-dark";

    import { cssValue, htmlValue, javascriptValue, typescriptValue } from "./_util/code";

    let value = "";

    let props: CodeMirror["$$prop_def"] = {
        basic: true,
        useTab: true,
        editable: true,
        readonly: false,
        tabSize: 2,
        placeholder: null,
        lang: null,
        theme: null,
    };

    const languages = ["custom", "javascript", "typescript", "css", "html"];
    let language = "custom";

    const themes = ["default", "onedark"];
    let theme = "default";

    function on_language_change(): void {
        switch (language) {
            case "custom":
                props.lang = null;
                break;
            case "javascript":
                props.lang = javascript();
                value = javascriptValue();
                break;
            case "typescript":
                props.lang = javascript({ typescript: true });
                value = typescriptValue();
                break;
            case "html":
                props.lang = html({ matchClosingTags: true });
                value = htmlValue();
                break;
            case "css":
                props.lang = css();
                value = cssValue();
                break;
        }
    }

    function on_theme_change(): void {
        switch (theme) {
            case "default":
                props.theme = null;
                break;
            case "onedark":
                props.theme = oneDark;
                break;
        }
    }
</script>

<div class="demo">
    <CodeMirror bind:value class="editor" {...props} />

    <div class="props">
        <h5>Basic setup</h5>
        <div class="props-section">
            <div class="toggle">
                <input id="basic" type="checkbox" bind:checked={props.basic} />
                <label for="basic">Use basic setup</label>
            </div>
            <div class="toggle">
                <input id="editable" type="checkbox" bind:checked={props.editable} />
                <label for="editable">Editable</label>
            </div>
            <div class="toggle">
                <input id="readonly" type="checkbox" bind:checked={props.readonly} />
                <label for="readonly">Read-only</label>
            </div>
        </div>

        <h5>Tab</h5>
        <div class="props-section">
            <div class="toggle">
                <input id="useTab" type="checkbox" bind:checked={props.useTab} />
                <label for="useTab">Enable Tab</label>
            </div>
            <div class="input">
                <label for="tabSize">Tab size</label>
                <input id="tabSize" type="number" bind:value={props.tabSize} step="1" />
            </div>
        </div>

        <h5>Language</h5>
        <div class="props-section">
            <div class="input">
                <label for="language">Language</label>
                <select id="language" bind:value={language} on:change={on_language_change}>
                    {#each languages as lang}
                        <option>{lang}</option>
                    {/each}
                </select>
            </div>
        </div>

        <h5>Theme</h5>
        <div class="props-section">
            <div class="input">
                <label for="theme">Theme</label>
                <select id="theme" bind:value={theme} on:change={on_theme_change}>
                    {#each themes as thm}
                        <option>{thm}</option>
                    {/each}
                </select>
            </div>
        </div>
    </div>
</div>

<style>
    .demo {
        position: relative;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr auto;
        overflow: hidden;
    }

    :global(.editor) {
        overflow: hidden;
    }

    .props {
        padding: 1rem;
        background: #edf2ff;
        border-top: solid 1px #ddd;
    }

    .props > h5:not(:first-child) {
        margin-top: 1rem;
        margin-bottom: 0.5rem;
    }

    .props-section {
        display: flex;
        flex-wrap: wrap;
    }

    .toggle {
        display: flex;
        align-items: center;
        font-size: 0.85rem;
        margin-right: 1rem;
    }
    .toggle > label {
        margin-left: 0.5rem;
        user-select: none;
    }

    .input {
        display: flex;
        align-items: center;
        font-size: 0.85rem;
        margin-right: 1rem;
    }
    .input > label {
        margin-right: 0.5rem;
        user-select: none;
    }

    input[type="number"] {
        width: 50px;
        text-align: right;
    }
</style>
