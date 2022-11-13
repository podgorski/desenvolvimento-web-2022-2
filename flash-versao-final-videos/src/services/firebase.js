import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAjsZ0o44PE5hgfblMZu6EppH59QsvfwCY",
    authDomain: "dev-web-952.firebaseapp.com",
    projectId: "dev-web-952",
    storageBucket: "dev-web-952.appspot.com",
    messagingSenderId: "1038372013722",
    appId: "1:1038372013722:web:6d3f6e2fcd094c8fc10123"
};

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp