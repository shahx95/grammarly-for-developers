import { init } from "@grammarly/editor-sdk";

const demoClientId = "YOUR_CLIENT_ID";

declare global {
  interface Window {
    registerGrammarlyAuthCallback: (cb: (url: string) => void) => void;
  }
}

async function setupGrammarly() {
  const grammarly = await init(demoClientId);

  // setup the editor
  grammarly.withElement(document.querySelector("div[contenteditable]"), {
    oauth: { redirectUri: "example://grammarly-auth/" },
  });

  // setup connected accounts
  window.registerGrammarlyAuthCallback((url) => {
    grammarly.handleOAuthCallback(url);
  });
}

setupGrammarly();
