# THIS IS NOT A PRODUCTION-READY SERVER

This server is provided to help developers experiment with trusted authentication.
The goal is not to provide a fully production-ready server to secure your existing Grammarly implementation.

# Java Assertion Server

The code in this directory provides an example Java Spring Boot server that generates valid assertions for the Grammarly Text Editor SDK's trusted authentication.

## Getting Started

You will first need to retrieve a private key in the JWK format. You can do this by navigating to your app in the [Grammarly Developer Hub](https://developer.grammarly.com/apps), selecting Trusted Authentication, and then clicking **Generate new key**. Save the key in a new file named `private.jwk` that you store in the project root (this file has been added to `.gitignore` so you don't accidentally check in your private key).
Then run the project with the command:

    gradle bootRun

The server should start. Note that the process will display something similar to `80% EXECUTING` while the server is running. You do not need to wait for the process to finish executing.

You can test the assertion endpoint by navigating to http://localhost:8080/assertion?clientId=YOUR_CLIENT_ID in your browser. If everything is working, the page will display an assertion for the given client id.

## How it Works

When a request arrives at this server, [JavaAssertionEndpointApplication](src/main/java/com/grammarly/g4d/JavaAssertionEndpointApplication.java) handles it.
This class extracts the client ID from the request and then creates a JSON Web Token (JWT). (Technically, it's actually a JWS, JSON Web Signature, which is a type of JWT.)
This JWT contains the necessary claims (such as issuer, subject, and audience) and is signed with the private key.

## Ask a Question

If you want to ask a question, share a suggestion, or chat about how you're using the Grammarly Text Editor SDK in your application, join us in the [Grammarly for Developers Discussions](https://github.com/grammarly/grammarly-for-developers/discussions).
