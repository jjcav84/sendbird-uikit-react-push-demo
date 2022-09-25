importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "********",
  authDomain: "*****-uikit-react.firebaseapp.com",
  projectId: "*****-uikit-react",
  storageBucket: "*****-uikit-react.appspot.com",
  messagingSenderId: "********",
  appId: "1:********:web:52428d21bbd26f08f40233",
  measurementId: "G-********"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = 'Profanity filter triggered';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/sendbird-logo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});