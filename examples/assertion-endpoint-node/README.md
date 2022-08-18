# Trusted authentication server (node.js)

This server is provided to help developers experiment with trusted authentication.  The goal is not to provide a fully production-ready server to secure your existing Grammarly implementation.


The code in this directory provides an example Node server that generates valid assertions for the Grammarly Text Editor SDK's trusted authentication.

## Getting Started

You will first need to retrieve a private key in the JWK format. You can do this by navigating to your app in the
[Grammarly Developer Hub](https://developer.grammarly.com/apps), selecting Trusted Authentication,
and then clicking **Generate new key**.

Copy the key into your clipboard. Then save the key in a file called `private.jwk` at the project root (next to `package.json`):

    pbpaste > private.jwk

(This filename has been added to `.gitignore` so that you don't accidentally check
in your private key.)

Then install any dependencies with the command:

    npm install

Then start the server with the following command:

    npm start

This will start the server at http://127.0.0.1:8080/.

When setting the `oauthAssertionProvider` [EditorConfig property](https://developer.grammarly.com/docs/api/editor-sdk/editorconfig) in your client code, be sure to include the client ID as a query parameter. For example:

```
​​<grammarly-editor-plugin
    client-id="YOUR_CLIENT_ID"
    config.oauthAssertionProvider="http://127.0.0.1:8080/?clientId=YOUR_CLIENT_ID">
```

## How it Works

When a request arrives at this server, [server.js](./server.js) handles it. This file extracts the client ID from the request and then creates a JSON Web Token (JWT). This JWT contains the necessary claims (such as issuer, subject, and audience) and is signed with the private key.

## Ask a Question

If you want to ask a question, share a suggestion, or chat about how you're using the Grammarly Text Editor SDK in your application, join us in the [Grammarly for Developers Discussions](https://github.com/grammarly/grammarly-for-developers/discussions).
