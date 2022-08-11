import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBSUzrUm77BencHnm5jZ3nDBychbKWmNR0",
  authDomain: "scl-020-burger-queen.firebaseapp.com",
  projectId: "scl-020-burger-queen",
  storageBucket: "scl-020-burger-queen.appspot.com",
  messagingSenderId: "792442469070",
  appId: "1:792442469070:web:15c1a1e3ad06829f94ae9f",
  measurementId: "G-MK4PDRDTTM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }