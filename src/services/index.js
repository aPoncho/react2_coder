// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb2qTS4Vgo_wO5u9AcEWe9-dOCB9Eu1bU",
  authDomain: "ecommerce-tcg-fbarrios.firebaseapp.com",
  projectId: "ecommerce-tcg-fbarrios",
  storageBucket: "ecommerce-tcg-fbarrios.appspot.com",
  messagingSenderId: "709097805676",
  appId: "1:709097805676:web:8a3f8bb8fbbf74ac988549"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db