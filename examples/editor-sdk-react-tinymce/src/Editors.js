import React, { useRef } from "react";

import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { demoClientId, demoText } from "./demo";
import "./style.css";
import { Editor } from "@tinymce/tinymce-react";

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
      <h2>TinyMCE Rich Text Editor</h2>

      {/* Wrap the rich text editor with <GrammarlyEditorPlugin> to add Grammarly suggestions  */}
      <GrammarlyEditorPlugin
        clientId={demoClientId}
        config={{
          documentDialect: "british",
          autocomplete: "on"
        }}
      >
        {/* Add a TinyMCE rich text editor */}
        <Editor
          initialValue={demoText.textarea}
          init={{
            height: 300,
            menubar: true
          }}
        />
      </GrammarlyEditorPlugin>
    </Grammarly>
  );
};
