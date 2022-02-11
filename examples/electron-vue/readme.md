# Electron Demo App With Vue

This is a sample [Electron](https://www.electronjs.org) app built with Vue to demo the Grammarly SDK integration.

<img width="912" alt="Screenshot of the Electron and Vue demo app" src="https://user-images.githubusercontent.com/3940962/153026427-5de8645e-fbb3-48c9-bf81-6690349df457.png">

## How to run the app

The instructions below will walk you through how to install, build, and run the app with basic functionality.

1. Clone this repo to your machine
1. Install the necessary dependencies: `npm install`
1. Create a new application with a desktop client in the [Grammarly Developer Hub](https://developer.grammarly.com/apps)
1. Add a new **Desktop** (not Web) client to your application
1. Copy the **Client ID** for your Desktop client
1. Open [src/components/demo.js](src/components/demo.js) on your local machine
1. Replace `demoClientId` with the **Client ID** for your app
1. Build the app: `npm run build-vue`
1. Start the app: `npm start`

The Electron app will open. When you click inside one of the text fields, Grammarly will underline text that can be improved. The Grammarly button will also appear in the lower-right corner of the application and display the total number of suggestions. 
