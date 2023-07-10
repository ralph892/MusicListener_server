import dotenv from 'dotenv';
dotenv.config();

import { initializeApp } from 'firebase/app';
import { getStorage, getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDiA85uXFyqd4wabMXxXBZntIpA4ea98Pw",
    authDomain: "musiclistener-82a42.firebaseapp.com",
    projectId: "musiclistener-82a42",
    storageBucket: "musiclistener-82a42.appspot.com",
    messagingSenderId: "364013961153",
    appId: "1:364013961153:web:8cef65f4232ef20700f940",
    measurementId: "G-26WGB9ESL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const getStorage = getStorage(app);

export default firebaseConfig;