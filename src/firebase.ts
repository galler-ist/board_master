import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNWW1rhnODBHMpJmmwRstzkNUyXRLIfEU",
  authDomain: "board-master-c7fae.firebaseapp.com",
  projectId: "board-master-c7fae",
  storageBucket: "board-master-c7fae.firebasestorage.app",
  messagingSenderId: "777009965364",
  appId: "1:777009965364:web:54138c3fc3ebb081159d61",
  measurementId: "G-M44SXNW3HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
