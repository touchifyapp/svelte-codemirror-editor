<script lang="ts">
    import CodeMirror from "$lib";
    import { css } from "@codemirror/lang-css";
    import { cssValue } from "./_util/code";

    const code = cssValue();
</script>

<CodeMirror value={code} lang={css()} class="editor" />
