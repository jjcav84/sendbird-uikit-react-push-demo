## How to run:

Add your [APP_ID, USER_ID, NICKNAME, and VAPIDKEY] to const.js file
[Sendbird Dashboard](https://dashboard.sendbird.com/)
[VAPID web credentials](https://firebase.google.com/docs/cloud-messaging/js/client?hl=en&authuser=0#configure_web_credentials_in_your_app)

Upload Firebase SDK credentials firebase-auth.json file to your server and copy the absolute path to server/server.js file (https://firebase.google.com/docs/admin/setup)

## Available Scripts:

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

Open an additional terminal window or tab and run:

### `cd server && npm start`

Starts the [express.js](https://expressjs.com) server listening on [http://localhost:8080](http://localhost:8080) with POST endpoint '/api/registerToken' for storing FCM tokens and POST endpoint '/api/sendbird' for consuming the [Sendbird](https://sendbird.com) events webhook.

* Note: If you don't have nodemon installed on your express server install it by running: `npm i -g nodemon`

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