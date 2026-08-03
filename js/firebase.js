// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {

    apiKey: "AIzaSyBm88mvoPiDw3UhkgUlwJDJ_lXk1NkRqM4",

    authDomain: "flashmaster-687fc.firebaseapp.com",

    projectId: "flashmaster-687fc",

    storageBucket: "flashmaster-687fc.firebasestorage.app",

    messagingSenderId: "84917654332",

    appId: "1:84917654332:web:7be86ecc60309c1d630439",

};


// Initialize
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

window.auth = auth;
window.db = db;


// Export
window.firebaseAuth = auth;

window.firebaseDB = db;
window.doc = doc;
window.setDoc = setDoc;
window.getDoc = getDoc;

console.log("Firebase Connected!");
