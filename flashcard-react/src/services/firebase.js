import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxx-xxxxxxxxxx",
    authDomain: "react-quinta.firebaseapp.com",
    projectId: "react-quinta",
    storageBucket: "react-quinta.appspot.com",
    messagingSenderId: "xxxxxxxxxx",
    appId: "1:xxxxxxxxxxxxx"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
