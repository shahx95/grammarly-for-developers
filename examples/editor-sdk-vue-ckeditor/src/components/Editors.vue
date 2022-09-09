<script>
import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-vue/v2";
import { demoText, demoClientId } from "./demo";
import Vue from "vue";
import CKEditor from "@ckeditor/ckeditor5-vue2";
// Note: I'm  using @ckeditor/ckeditor5-build-classic v32.0.0. I got errors with newer versions
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

Vue.use(CKEditor);

export default {
  data: () => ({
    text: demoText.contenteditable,
    clientId: demoClientId,
    editor: ClassicEditor,
  }),
  components: { Grammarly, GrammarlyEditorPlugin },
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
      <!-- Wrap the rich text editor with <GrammarlyEditorPlugin> to add Grammarly suggestions -->
      <GrammarlyEditorPlugin>
        <h2>CKEditor Classic Editor</h2>
        <div id="app">
          <!-- Create a new classic editor -->
          <ckeditor :editor="editor" v-model="text"></ckeditor>
        </div>
      </GrammarlyEditorPlugin>
    </div>
  </Grammarly>
</template>
