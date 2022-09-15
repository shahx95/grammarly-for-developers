import React from "react";

import { demoText } from "./demo";
import "./style.css";

export const Editors = () => {
  return (
    <div>
      <h1>Demo React App</h1>

      <textarea defaultValue={demoText.textarea} rows={10}></textarea>
    </div>
  );
};
