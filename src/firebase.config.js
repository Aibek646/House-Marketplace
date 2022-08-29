// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCA8Cu052gJeqdVQYxA7VIvpcmeUJDqpq8",
    authDomain: "house-marketplace-400fb.firebaseapp.com",
    projectId: "house-marketplace-400fb",
    storageBucket: "house-marketplace-400fb.appspot.com",
    messagingSenderId: "130697065732",
    appId: "1:130697065732:web:741f279863854f5804cc51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
