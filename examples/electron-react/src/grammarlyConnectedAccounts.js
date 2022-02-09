import { init } from '@grammarly/editor-sdk-react'
import { demoClientId } from './demo'

export function setupGrammarlyConnectedAccounts() {
  init(demoClientId).then((grammarly) => {
    window.registerGrammarlyAuthCallback(url => {
      grammarly.handleOAuthCallback(url);
    })
  });
}
