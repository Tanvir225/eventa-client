// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCypyp8Sjcdsa58SD0Nz5-grAC_pYcWueg",
  authDomain: "eventa-c677c.firebaseapp.com",
  projectId: "eventa-c677c",
  storageBucket: "eventa-c677c.appspot.com",
  messagingSenderId: "977468788378",
  appId: "1:977468788378:web:748d1d42e794758f5d5923"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth