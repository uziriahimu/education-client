// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWTDZRbEaKBS5hTlbEOqRHEU7OBtiC3JM",
    authDomain: "education-client.firebaseapp.com",
    projectId: "education-client",
    storageBucket: "education-client.appspot.com",
    messagingSenderId: "966971048163",
    appId: "1:966971048163:web:7b93c858f9d11f271f45d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;