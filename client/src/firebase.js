// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoMLALnIyEBhb0Tm9cXz2GbpwT2n-TjQ8",
    authDomain: "mern-f7119.firebaseapp.com",
    projectId: "mern-f7119",
    storageBucket: "mern-f7119.appspot.com",
    messagingSenderId: "224901680832",
    appId: "1:224901680832:web:5d417edbf08d3a95ffe725",
    measurementId: "G-YPDEBWPQGG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);