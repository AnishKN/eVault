// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuPcQ5L3hVfgbR7AD1LsEvCB8W0I06maU",
  authDomain: "evault-service.firebaseapp.com",
  projectId: "evault-service",
  storageBucket: "evault-service.appspot.com",
  messagingSenderId: "76483001530",
  appId: "1:76483001530:web:30c06131cb419732e25683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;