# svelte-codemirror-editor

A svelte component to create a [CodeMirror 6](https://codemirror.net/6/) editor.

## Installation

```bash
# create a new project in the current directory
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

| Property      | Type              | Description                                                                                   | Default value |
| ---------     | ----------------- | --------------------------------------------------------------------------------------------- | ------------- |
| `value`       | `string`          | The value that will be displayed and edited in the CodeMirror editor                          | `""`          |
| `basic`       | `boolean`         | Whether to use CodeMirror `basicSetup` extensions.                                            | `true`        |
| `lang`        | `LanguageSupport` | The language extension that will parse and highlight the value.                               | `undefined`   |
| `theme`       | `Extension`       | The theme extension to customize the appearence of the editor.                                | `undefined`   |
| `extensions`  | `Extension[]`     | Additional extensions to inject in the editor.                                                | `[]`          |
| `useTab`      | `boolean`         | Whether to use the `Tab` shortcut to handle indentation.                                      | `true`        |
| `tabSize`     | `number`          | The number of space of an indentation level.                                                  | `2`           |
| `editable`    | `boolean`         | Whether to make the editor editable or not.                                                   | `true`        |
| `readonly`    | `boolean`         | Whether to make the editor readonly or not.                                                   | `false`       |
| `placeholder` | `string`          | A placeholder to include when value is empty.                                                 | `undefined`   |
| `styles`      | `ThemeSpec`       | In-place theme configuration. *See exemple below*.                                            | `undefined`   |

## Events

| Event    | Type     | Description                   |
| -------- | -------- | ----------------------------- |
| `change` | `string` | Trigger when the code changes |

## Exemples

### Basic usage

```svelte
<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";

    let value = "";
</script>

<CodeMirror bind:value lang={javascript()} />
```

### Custom theme

```svelte
<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";
    import { oneDark } from "@codemirror/theme-one-dark";

    let value = "";
</script>

<CodeMirror bind:value lang={javascript()} theme={oneDark} />
```

### Custom styles

```svelte
<script lang="ts">
    import CodeMirror from "svelte-codemirror-editor";
    import { javascript } from "@codemirror/lang-javascript";

    let value = "";
</script>

<CodeMirror 
    bind:value 
    lang={javascript()} 
    styles={{
        "&": {
            width: "500px",
            maxWidth: "100%",
            height: "50rem"
        }
    }}
/>
```
