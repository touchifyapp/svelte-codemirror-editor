# svelte-codemirror-editor

A svelte component to create a [CodeMirror 6](https://codemirror.net/6/) editor.

## Installation

```bash
# create a new project in the current directory
npm install svelte-codemirror-editor
```

## Usage

To use `svelte-codemirror-editor`, you need to import the package and use it as any `Svelte` component.

```tsx
<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";

    let value = "";
</script>

<CodeMirror bind:value lang={javascript} class="editor" />

<style>
    :global(.editor .cm-editor) {
        height: 40rem;
    }
</style>

```

### Properties

| Property  | Type       | Description                                                                                 | Default value |
| --------- | ---------- | ------------------------------------------------------------------------------------------- | ------------- |
| `value`   | `string`   | The value that will be displayed and edited in the CodeMirror editor                        | `""`          |
| `lang`    | `"string"` | The language of the code. Can be one of `javascript`, `typescript`, `html`, `css`, `custom` | `"custom"`    |
| `useTab`  | `boolean`  | Whether to use the `Tab` shortcut to handle indentation                                     | `true`        |
| `tabSize` | `number`   | The number of space of an indentation level.                                                | `2`           |

### Events

| Event    | Type     | Description                   |
| -------- | -------- | ----------------------------- |
| `change` | `string` | Trigger when the code changes |
