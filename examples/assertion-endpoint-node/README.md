# THIS IS NOT A PRODUCTION-READY SERVER!

This server is provided to help developers to experiment with Trusted Authentication.  The goal is not to provide a fully production-ready server to secure your existing Grammarly implementation.

# Node Trusted-Auth Server

An example node server that is capable to generate valid assertions to support the Trusted Auth system.

## Getting started

You will first need to retrieve a private key in the JWK format.  You can do this from https://developer.grammarly.com/ when you "Generate new key".  Save this file in the project root with the name `private.jwk` (this has been added to `.gitignore` so you don't accidentally check in your private key).  Then install any dependencies with the command:

    npm install

Then start the server with the following command:

    npm start

This will start the server at http://127.0.0.1:8080/.
