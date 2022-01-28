import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebaseKey from "./firebaseKey";

const app = initializeApp(firebaseKey);

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
