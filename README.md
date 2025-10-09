# svelte-codemirror-editor

[![License](https://img.shields.io/badge/license-MIT-green.svg)](http://opensource.org/licenses/MIT)
[![NPM version](https://img.shields.io/npm/v/svelte-codemirror-editor.svg?style=flat-square)](https://npmjs.org/package/svelte-codemirror-editor)
[![NPM download](https://img.shields.io/npm/dm/svelte-codemirror-editor.svg?style=flat-square)](https://npmjs.org/package/svelte-codemirror-editor)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A svelte component to create a [CodeMirror 6](https://codemirror.net/6/) editor.

## Compatibility Matrix

| svelte-codemirror-editor version | svelte version |
|----------------------------------|----------------|
| v1.x                             | v3, v4, v5     |
| v2.x                             | v5 *(runes)*   |

## Installation

```bash
npm install svelte-codemirror-editor
```

## Usage

To use `svelte-codemirror-editor`, you need to import the package and use it as any `Svelte` component.

```svelte
<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";

    let value = "";
</script>

<CodeMirror bind:value lang={javascript()} />
```

## Properties

| Property               | Type                 | Description                                                           | Default value |
| ---------------------- | -------------------- | --------------------------------------------------------------------- | ------------- |
| `value`                | `string`             | The value that will be displayed and edited in the CodeMirror editor. | `""`          |
| `class`                | `ClassValue`         | Class value to add additional css classes to CodeMirror editor.       | `""`          |
| `lang`                 | `LanguageSupport`    | The language extension that will parse and highlight the value.       | `undefined`   |
| `theme`                | `Extension`          | The theme extension to customize the appearence of the editor.        | `undefined`   |
| `extensions`           | `Extension[]`        | Additional extensions to inject in the editor.                        | `[]`          |
| `allowMultiSelect`     | `boolean`            | Whether to allow multi-selecting text.                                | `true`        |
| `useTab`               | `boolean`            | Whether to use the `Tab` shortcut to handle indentation.              | `true`        |
| `tabSize`              | `number`             | The number of space of an indentation level.                          | `2`           |
| `editable`             | `boolean`            | Whether to make the editor editable or not.                           | `true`        |
| `readonly`             | `boolean`            | Whether to make the editor readonly or not.                           | `false`       |
| `lineWrapping`         | `boolean`            | Whether to wrap lines in the editor or not.                           | `false`       |
| `lineNumbers`          | `boolean`            | Whether to show line numbers or not.                                  | `true`        |
| `highlight`            | `object`             | Hightlighting options.                                                | `{}`          |
| `history`              | `boolean` \| `object` | Enable/Disable and/or configure history.                              | `true`        |
| `foldGutter`           | `boolean` \| `object` | Enable/disable and/or configure fold gutter.                          | `true`        |
| `drawSelection`        | `boolean` \| `object` | Enable/disable and/or configure draw selection.                       | `true`        |
| `dropCursor`           | `boolean`            | Whether to show the drop cursor.                                      | `true`        |
| `indentOnInput`        | `boolean`            | Whether to indent on input.                                           | `true`        |
| `syntaxHighlighting`   | `boolean` \| `object` | Enable/disable and/or configure syntax highlighting.                  | `true`        |
| `bracketMatching`      | `boolean` \| `object` | Enable/disable and/or configure bracket matching.                     | `true`        |
| `closeBrackets`        | `boolean`            | Whether to close brackets automatically.                              | `true`        |
| `autocompletion`       | `boolean` \| `object` | Enable/disable and/or configure autocompletion.                       | `true`        |
| `rectangularSelection` | `boolean` \| `object` | Enable/disable and/or configure rectangular selection.                | `true`        |
| `crosshairCursor`      | `boolean` \| `object` | Enable/disable and/or configure crosshair cursor.                     | `true`        |
| `placeholder`          | `string`             | The placeholder text or element to show when the editor is empty.     | `undefined`   |
| `nodebounce`           | `boolean`            | Disable onchange debounce for value updates. (may impact performance) | `false`       |
| `styles`               | `ThemeSpec`          | In-place theme configuration. _See exemple below_.                    | `undefined`   |

## Events

| Event           | Type         | Description                                                                     |
| --------------- | ------------ | ------------------------------------------------------------------------------- |
| `onchange`      | `string`     | Trigger when the code changes.                                                  |
| `onready`       | `EditorView` | Trigger when the editor is ready. Allows to retrieve the `EditorView` instance. |
| `onreconfigure` | `EditorView` | Trigger when the editor is reconfiguring because of props update.               |

## Usage with vite / svelte-kit

If you try to use this component with `vite` or `svelte-kit`, you have to disable dependency optimization for `codemirror` and all its extensions.

```javascript
// vite.config.js
const config = {
    //...
    optimizeDeps: {
        exclude: ["svelte-codemirror-editor", "codemirror", "@codemirror/language-javascript" /* ... */],
    },
    //...
}
```

## Exemples

### Basic usage

```svelte
<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";

    let value = $state("");
</script>

<CodeMirror bind:value lang={javascript()} />
```

### Custom theme

```svelte
<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";
    import { oneDark } from "@codemirror/theme-one-dark";

    let value = $state("");
</script>

<CodeMirror bind:value lang={javascript()} theme={oneDark} />
```

### Custom styles

```svelte
<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";

    let value = $state("");
</script>

<CodeMirror
    bind:value
    lang={javascript()}
    styles={{
        "&": {
            width: "500px",
            maxWidth: "100%",
            height: "50rem",
        },
    }}
/>
```

### Get EditorView instance

```svelte
<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    let view = $state<EditorView>();
</script>

<CodeMirror onready={(cm_view) => view = cm_view} />
```

## License

[MIT](LICENSE)
