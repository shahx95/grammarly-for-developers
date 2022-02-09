# Electron Demo App With React

This is a sample electron app with react to demo Grammarly SDK integration.

<img width="912" alt="Screenshot of the Electron demo app" src="https://user-images.githubusercontent.com/3940962/153027023-2e726d27-6996-4075-bcda-9c70b9840662.png">

## How to run the app

The instructions below will walk you through how to install, build, and run the app with basic functionality.

1. Install [Electron](https://www.electronjs.org]: `npm i -D electron@latest`
1. Clone this repo to your machine
1. Install the necessary dependencies: `npm install`
1. Create a new application with a desktop client in the [Grammarly Developer Hub](https://developer.grammarly.com/apps)
1. Add a new **Desktop** (not Web) client to your application
1. Copy the **Client ID** for your Desktop client
1. Open [src/demo.js](src/demo.js) on your local machine
1. Replace `demoClientId` with the **Client ID** for your app
1. Build the app: `npm run build-react`
1. Start the app: `npm start`

The Electron app will open. When you click inside one of the text fields, Grammarly will underline text that can be improved. The Grammarly button will also appear in the lower-right corner of the application and display the total number of suggestions. 
