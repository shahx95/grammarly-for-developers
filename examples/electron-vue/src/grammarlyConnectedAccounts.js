import { init } from '@grammarly/editor-sdk-vue/v2'
import { demoClientId } from './components/demo'

export function setupGrammarlyConnectedAccounts() {
  init(demoClientId).then((grammarly) => {
    window.registerGrammarlyAuthCallback(url => {
      grammarly.handleOAuthCallback(url);
    })
  });
}
