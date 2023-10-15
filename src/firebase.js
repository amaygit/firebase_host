import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4dVxEIiMbE-6f-ha2nDz1bFXsKrgQZ98",
  authDomain: "chats-8acda.firebaseapp.com",
  projectId: "chats-8acda",
  storageBucket: "chats-8acda.appspot.com",
  messagingSenderId: "1010004189363",
  appId: "1:1010004189363:web:fbad3c0ae922189f73d0c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
