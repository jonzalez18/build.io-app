import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore,  } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

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
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authorizedUser = getAuth(app);
export const userCollection = collection(db, 'users')
export const eventsCollection = collection(db, 'events')
export default app;

