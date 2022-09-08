<script>
import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-vue/v2";
import { demoText, demoClientId } from "./demo";
import Editor from "@tinymce/tinymce-vue";

export default {
  data: () => ({ text: demoText.contenteditable, clientId: demoClientId }),
  components: { Grammarly, GrammarlyEditorPlugin, editor: Editor },
};
</script>

<template>
  <!-- Configure the Grammarly Editor SDK.
    You could also include the config in <GrammarlyEditorPlugin> -->
  <Grammarly
    :clientId="clientId"
    :config="{
      documentDialect: 'british',
      autocomplete: 'on',
    }"
  >
    <div>
      <h2>TinyMCE Rich Text Editor</h2>
      <!-- Wrap the rich text editor with <GrammarlyEditorPlugin> to add Grammarly suggestions -->
      <GrammarlyEditorPlugin>
        <!-- Add a TinyMCE rich text editor -->
        <editor
          :initialValue="text"
          :init="{
            height: 300,
            menubar: true,
          }"
        />
      </GrammarlyEditorPlugin>
    </div>
  </Grammarly>
</template>
