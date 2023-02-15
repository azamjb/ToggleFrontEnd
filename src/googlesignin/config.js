import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAMCTK6-C1xASwAoPiDfyq5xje6WJCdOgw",
  authDomain: "toggle-f70dd.firebaseapp.com",
  projectId: "toggle-f70dd",
  storageBucket: "toggle-f70dd.appspot.com",
  messagingSenderId: "890577974499",
  appId: "1:890577974499:web:0aa07b0a6bf91e37bac1d6",
  measurementId: "G-N0CCWTS4WV"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);