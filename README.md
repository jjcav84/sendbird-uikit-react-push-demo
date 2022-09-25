## How to run:

Add your APP_ID, USER_ID, NICKNAME [Sendbird Dashboard](https://dashboard.sendbird.com/) and VAPIDKEY [Web Push Certificate](https://firebase.google.com/docs/cloud-messaging/js/client#configure_web_credentials_in_your_app) to const.js file.

Upload Firebase SDK credentials firebase-auth.json file to your server and copy the absolute path to server.js file [Firebase Admin Setup](https://firebase.google.com/docs/admin/setup)

## Available Scripts:

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

To start your push server open an additional terminal window and run:

### `cd server && npm start`

Changes to `server` directory and starts an [express.js](https://expressjs.com) server listening on [http://localhost:8080](http://localhost:8080) with the following endpoints.
* POST endpoint '/api/registerToken' for storing Firebase Cloud Messaging tokens
* POST endpoint '/api/sendbird' for consuming the [Sendbird](https://sendbird.com) webhook events

* **_Note: If you don't have nodemon installed on the express please run: `npm i -g nodemon`_**

Build the app for production to the `build` folder by running:

### `npm run build`

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

## Deployment:

For hosting please read the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
Alternatively you may use [Ngrok](https://ngrok.io) or other tunneling tools to expose your localhost for development and testing.

## Resources:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project relied on code from the following repositories:

* [Sendbird Profanity Notification](https://github.com/chrischabot/sendbird-profanity-notification)

* [Sendbird PWA Push Example](https://github.com/SendbirdCommunity/sendbird-pwa-push-example)

* [Sendbird UIKit React v3 Groupchannel Demo](https://github.com/sendbird/sendbird-uikit-react/tree/main/samples/groupchannel)
