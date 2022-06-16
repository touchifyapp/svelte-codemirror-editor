<script lang="ts">
    import CodeMirror from "$lib";
    import { javascript } from "@codemirror/lang-javascript";
    import { typescriptValue } from "./_util/code";

    const code = typescriptValue();
</script>

<CodeMirror value={code} lang={javascript({ typescript: true })} class="editor" />
