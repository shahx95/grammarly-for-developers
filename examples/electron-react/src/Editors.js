import React from "react";

import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { demoClientId, demoText } from "./demo";
import "./style.css";

export const Editors = () => {
  return (
    <Grammarly clientId={demoClientId}>
      <h2>Textarea</h2>
      <GrammarlyEditorPlugin>
        <textarea defaultValue={demoText.textarea} rows={10}></textarea>
      </GrammarlyEditorPlugin>

      <h2>Input</h2>
      <label htmlFor="test-input">Label</label>
      <GrammarlyEditorPlugin>
        <input defaultValue={demoText.input} id="test-input" />
      </GrammarlyEditorPlugin>

      <h2>Contenteditable</h2>
      <GrammarlyEditorPlugin>
        <div
          contentEditable="true"
          dangerouslySetInnerHTML={{
            __html: demoText.contenteditable,
          }}
        ></div>
      </GrammarlyEditorPlugin>
    </Grammarly>
  );
};
