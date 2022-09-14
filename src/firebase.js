// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwx3L8mUjNlcsbJf6QZ7f2GLFVIDhlsxs",
  authDomain: "clone-3ec80.firebaseapp.com",
  projectId: "clone-3ec80",
  storageBucket: "clone-3ec80.appspot.com",
  messagingSenderId: "465790879034",
  appId: "1:465790879034:web:b8bcce8119feacf63cfc03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { db, auth, provider };