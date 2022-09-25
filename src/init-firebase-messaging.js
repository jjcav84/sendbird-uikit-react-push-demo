import SendBird from 'sendbird';
import firebase from 'firebase/app'
import "firebase/messaging";
//import SendBird from 'sendbird';
import { APP_ID, USER_ID, VAPIDKEY } from "./const";

const initializedFirebaseApp = firebase.initializeApp({
  apiKey: "********",
  authDomain: "*****-uikit-react.firebaseapp.com",
  projectId: "*****-uikit-react",
  storageBucket: "*****-uikit-react.appspot.com",
  messagingSenderId: "********",
  appId: "1:********:web:52428d21bbd26f08f40233",
  measurementId: "G-*****"
});

const messaging = initializedFirebaseApp.messaging();

const appId = APP_ID;
const userId = USER_ID;
const vapidKey = VAPIDKEY;
const sb = new SendBird({ appId });

sb.connect(userId, (user, error) => {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      messaging.getToken({ vapidKey: vapidKey })
        .then(token => {
          if (token) {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ token: token })
            };
            fetch('https://3c09-2603-8081-6d00-159a-b541-7282-da7b-ec15.*****.io/api/registerToken', requestOptions);
            sb.registerGCMPushTokenForCurrentUser(token, (response, error) => {
              if (error) console.log(error);
              console.log("Token Registered:", token)
            });

          }
        })
        .catch(err => {
          console.log('An error occurred while retrieving token. ', err);
        });
    } else {
      console.log('Unable to get permission to notify.');
    }
  })
})

messaging.onMessage(function (payload) {
  console.log('[firebase-messaging-sw.js] Received message ', payload);
  new Notification(payload.data.title, {
    icon: './sendbird-logo.png',
    body: payload.data.body,
  });
});

export { messaging };