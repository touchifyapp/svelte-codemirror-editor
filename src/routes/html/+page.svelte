<script lang="ts">
    import CodeMirror from "$lib";
    import { html } from "@codemirror/lang-html";
    import { htmlValue } from "../_util/code";

    const code = htmlValue();
</script>

<CodeMirror value={code} lang={html({ matchClosingTags: true })} class="editor" />
