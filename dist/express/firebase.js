"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventsCollection = exports.userCollection = exports.authorizedUser = exports.db = void 0;
const app_1 = require("firebase/app");
const firestore_1 = require("firebase/firestore");
const auth_1 = require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8MofEKwAx5_95NMJkiHJOtHpTS2FLXjI",
    authDomain: "build-tailwind-app.firebaseapp.com",
    projectId: "build-tailwind-app",
    storageBucket: "build-tailwind-app.appspot.com",
    messagingSenderId: "42980932315",
    appId: "1:42980932315:web:a694b64331c66b8ccaaafe",
    measurementId: "G-RSFLYNSLL8"
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.db = (0, firestore_1.getFirestore)(app);
exports.authorizedUser = (0, auth_1.getAuth)(app);
exports.userCollection = (0, firestore_1.collection)(exports.db, 'users');
exports.eventsCollection = (0, firestore_1.collection)(exports.db, 'events');
exports.default = app;
