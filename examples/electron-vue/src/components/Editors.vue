<script>
import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-vue";
import { demoText, demoClientId } from "./demo";

export default {
  data: () => ({ text: demoText, clientId: demoClientId }),
  components: { Grammarly, GrammarlyEditorPlugin },
};
</script>

<template>
  <Grammarly :clientId="clientId">
    <div>
      <h2>Textarea</h2>
      <GrammarlyEditorPlugin>
        <textarea v-model="text.textarea" rows="10"></textarea>
      </GrammarlyEditorPlugin>

      <h2>Input</h2>
      <label htmlFor="test-input">Label</label>
      <GrammarlyEditorPlugin>
        <input v-model="text.input" id="test-input" />
      </GrammarlyEditorPlugin>

      <h2>Contenteditable</h2>
      <GrammarlyEditorPlugin>
        <div contentEditable="true" v-html="text.contenteditable"></div>
      </GrammarlyEditorPlugin>
    </div>
  </Grammarly>
</template>
