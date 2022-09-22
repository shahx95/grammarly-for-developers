import React from "react";

import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { demoClientId, demoText } from "./demo";
import "./style.css";

export const Editors = () => {
  const [grammarlyConfig, setGrammarlyConfig] = React.useState({ underlines: "on", suggestionCards: "on" })
  const [showGrammarly, setShowGrammarly] = React.useState(true)

  return (
    <div>
      <h1>3 Ways to Turn Off UI Elements in the Text Editor Plugin</h1>

      {
        showGrammarly ? (
          <GrammarlyEditorPlugin clientId={demoClientId} config={grammarlyConfig}>
            <textarea defaultValue={demoText.textarea} rows={10}></textarea>
          </GrammarlyEditorPlugin>
        ) : <textarea defaultValue={demoText.textarea} rows={10}></textarea>
      }
      <p>
        Suggestion cards:<br />
        <input
          type="radio"
          id="suggestion-cards-on"
          name="suggestion-cards"
          onClick={() => setGrammarlyConfig({ ...grammarlyConfig, suggestionCards: "on" })}
          checked={grammarlyConfig.suggestionCards === "on"}
        />
        <label for="suggestion-cards-on">On</label><br />
        <input
          type="radio"
          id="suggestion-cards-off"
          name="suggestion-cards"
          onClick={() => setGrammarlyConfig({ ...grammarlyConfig, suggestionCards: "off" })}
          checked={grammarlyConfig.suggestionCards === "off"}
        />
        <label for="suggestion-cards-off">Off</label><br />
      </p>

      <p>
        Underlines:<br />
        <input
          type="radio"
          id="underlines-on"
          name="underlines"
          onClick={() => setGrammarlyConfig({ ...grammarlyConfig, underlines: "on" })}
          checked={grammarlyConfig.underlines === "on"}
        />
        <label for="underlines-on">On</label><br />
        <input
          type="radio"
          id="underlines-off"
          name="underlines"
          onClick={() => setGrammarlyConfig({ ...grammarlyConfig, underlines: "off" })}
          checked={grammarlyConfig.underlines === "off"}
        />
        <label for="underlines-off">Off</label><br />
      </p>

      <p>
        Plugin:<br />
        <input
          type="radio"
          id="plugin-on"
          name="plugin"
          onClick={() => {
            setShowGrammarly(true)
            // so that suggestions show up without needing to focus textarea
            setGrammarlyConfig({ ...grammarlyConfig, activation: "immediate" })
          }}
          checked={showGrammarly}
        />
        <label for="plugin-on">On</label><br />
        <input
          type="radio"
          id="plugin-off"
          name="plugin"
          onClick={() => setShowGrammarly(false)}
          checked={!showGrammarly}
        />
        <label for="plugin-off">Off</label><br />
      </p>
    </div>
  );
};
