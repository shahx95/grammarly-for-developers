import React from "react";

import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { demoClientId, demoText } from "./demo";
import "./style.css";

import { CKEditor } from "@ckeditor/ckeditor5-react";
// Note: I'm  using @ckeditor/ckeditor5-build-classic v32.0.0. I got errors with newer versions
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export const Editors = () => {
  return (
    // Configure the Grammarly Editor SDK
    // You could also include the config in <GrammarlyEditorPlugin>
    <Grammarly
      clientId={demoClientId}
      config={{
        documentDialect: "british",
        autocomplete: "on"
      }}
    >
      <h2>CKEditor Classic Editor</h2>
      {/* Wrap the rich text editor with <GrammarlyEditorPlugin> to add Grammarly suggestions  */}
      <GrammarlyEditorPlugin>
        {/* Create a new classic editor */}
        <CKEditor editor={ClassicEditor} data={demoText.contenteditable} />
      </GrammarlyEditorPlugin>
    </Grammarly>
  );
};
