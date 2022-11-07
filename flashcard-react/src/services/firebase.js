import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDAOjWMXUdpBrKeX6q-hUC67rU0ObgsRIo",
    authDomain: "react-quinta.firebaseapp.com",
    projectId: "react-quinta",
    storageBucket: "react-quinta.appspot.com",
    messagingSenderId: "57892363636",
    appId: "1:57892363636:web:6bd45ca66041116f70e021"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
