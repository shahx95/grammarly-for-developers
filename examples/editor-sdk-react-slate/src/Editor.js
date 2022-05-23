import React, { useMemo, useState } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Slate, Editable, withReact } from "slate-react";

import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { demoClientId, demoText } from "./demo";
import "./style.css";

export const Editor = () => {
  const [value, setValue] = useState(demoText);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
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
      {/* Wrap the rich text editor with <GrammarlyEditorPlugin> to add Grammarly suggestions  */}
      <GrammarlyEditorPlugin>
        <h2>Slate Text Editor</h2>
        {/* Create a new Slate text editor */}
        <Slate
          editor={editor}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <Editable placeholder="Enter some plain text..." />
        </Slate>
      </GrammarlyEditorPlugin>
    </Grammarly>
  );
};
