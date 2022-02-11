# Electron Demo App

This is a sample [Electron](https://www.electronjs.org) app to demo the Grammarly SDK integration.


<img width="912" alt="Screenshot of the Electron Demo App" src="https://user-images.githubusercontent.com/3940962/152837523-a6d17634-517a-4228-a884-9efbc66f2e39.png">

## How to run the app

The instructions below will walk you through how to install and run the app with basic functionality.

1. Clone this repo to your machine
1. Install the necessary dependencies: `npm install`
1. Create a new application with a desktop client in the [Grammarly Developer Hub](https://developer.grammarly.com/apps)
1. Add a new **Desktop** (not Web) client to your application
1. Copy the **Client ID** for your Desktop client
1. Open [src/index.ts](src/index.ts) on your local machine
1. Replace `YOUR_CLIENT_ID` with the **Client ID** for your app
1. Build the app: `npm run build`
1. Start the app: `npm start`

The Electron app will open. When you click inside one of the text fields, Grammarly will underline text that can be improved. The Grammarly button will also appear in the lower-right corner of the application and display the total number of suggestions. 

### Turning on Connected Accounts

You'll need to complete a few extra steps if you would like to turn on [Connected Accounts](https://developer.grammarly.com/docs/connected-accounts). Connected Accounts allows users to connect their personal Grammarly accounts with the application.

1. Navigate to the desktop client configuration page for your application in the [Grammarly Developer Hub](https://developer.grammarly.com/apps)
1. Add the following as a Redirect URI: `example://grammarly-auth/`. Note that this matches the Redirect URI that the app configures in [index.html](index.html)
1. Navigate to the **Connected Accounts** page for your application in the [Grammarly Developer Hub](https://developer.grammarly.com/apps)
1. Turn **on** Connected Accounts
1. Input the required information and click **Save**
1. Reload your Electron app

When you click the Grammarly button in the lower-right corner of the app, you will now see an option to **Connect your Grammarly account**. You can choose to connect your personal Grammarly account, so that Grammarly will make suggestions based on your account's features and preferences.


