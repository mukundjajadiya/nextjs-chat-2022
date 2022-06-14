// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHR7sfylhQFBsDhf3lrW0NDOWC_Y4_H6Y",
  authDomain: "nextjs-chat-2022.firebaseapp.com",
  projectId: "nextjs-chat-2022",
  storageBucket: "nextjs-chat-2022.appspot.com",
  messagingSenderId: "717492437493",
  appId: "1:717492437493:web:117c670c8ca2212585a0bc",
  measurementId: "G-DSNTVEJDM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);