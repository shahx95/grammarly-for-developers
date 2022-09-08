import { init } from "@grammarly/editor-sdk";

const demoClientId = "client_CAsxR7Djxg9EiT9VCyE3uP";

declare global {
  interface Window {
    registerGrammarlyAuthCallback: (cb: (url: string) => void) => void;
  }
}

async function setupGrammarly() {
  const grammarly = await init(demoClientId);

  // setup connected accounts
  window.registerGrammarlyAuthCallback((url) => {
    grammarly.handleOAuthCallback(url);
  });
}

setupGrammarly();
