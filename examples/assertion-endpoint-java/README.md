# THIS IS NOT A PRODUCTION-READY SERVER

This server is provided to help developers experiment with trusted authentication.
The goal is not to provide a fully production-ready server to secure your existing Grammarly implementation.

# Java Assertion Server

The code in this directory provides an example Java Spring Boot server that generates valid assertions for trusted authentication.

## Getting Started

You will first need to retrieve a private key in the JWK format.  You can do this from https://developer.grammarly.com/ when you "Generate new key".
Save this file in the project root with the name `private.jwk` (this has been added to `.gitignore` so you don't accidentally check in your private key).
Then run the project with the command:

    gradle bootRun

The server should start up. You can then test it by navigating to http://localhost:8080/assertion?clientId=YOUR_CLIENT_ID to test the generation of an
assertion for a given client id.

## How It Works

When a request arrives at this server, it is handled by the [JavaAssertionEndpointApplication](src/main/java/com/grammarly/g4d/JavaAssertionEndpointApplication.java).
This class extracts the client id from the request and then creates a JSON Web Token (JWT). [Technically, it's actually a JWS, JSON Web Signature, which is a type of JWT.]
This JWT contains the necessary claims (such as issuer, subject, audience) and is then signed with the user's private key.

## Ask a Question

If you want to ask a question, share a suggestion, or chat about how you're using the Grammarly Text Editor SDK in your application, join us in the [Grammarly for Developers Discussions](https://github.com/grammarly/grammarly-for-developers/discussions).
