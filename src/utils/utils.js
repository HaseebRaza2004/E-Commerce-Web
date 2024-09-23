import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage  } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXpY4mGSbBYn_mrY6YfihYjzFlNQ9yLD0",
  authDomain: "smit-learning.firebaseapp.com",
  projectId: "smit-learning",
  storageBucket: "smit-learning.appspot.com",
  messagingSenderId: "734240451877",
  appId: "1:734240451877:web:e7b35be3e6645a67333ecc",
  measurementId: "G-FTJDX6BRE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export { auth, db, storage };