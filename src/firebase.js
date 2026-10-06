import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:  "AIzaSyCNzAu0w6w6IuVjFl8MNVcza6ZjpqZ6qb0",
  authDomain: "you-call-we-solve.firebaseapp.com",
  projectId: "you-call-we-solve",
  storageBucket: "you-call-we-solve.firebasestorage.app",
  messagingSenderId: "946260747799",
  appId: "1:946260747799:web:28b3bd1cbe1aeb7ab75e52",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const db = getFirestore(app);

export default app;



