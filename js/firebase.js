// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// Firebase Config
const firebaseConfig = {

    apiKey: "API_KEY",

    authDomain: "AUTH_DOMAIN",

    projectId: "PROJECT_ID",

    storageBucket: "STORAGE_BUCKET",

    messagingSenderId: "SENDER_ID",

    appId: "APP_ID"

};


// Initialize
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


// Export
window.firebaseAuth = auth;

window.firebaseDB = db;

console.log("Firebase Connected!");
