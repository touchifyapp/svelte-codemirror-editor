<script lang="ts">
    import CodeMirror from "$lib";
    import { javascript } from "@codemirror/lang-javascript";
    import { javascriptValue } from "../_util/code";

    const code = javascriptValue();
</script>

<CodeMirror value={code} lang={javascript()} class="editor" />
