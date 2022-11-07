import React, { createContext, useEffect, useState } from "react";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut as signOutFirebase,
    onAuthStateChanged
} from "firebase/auth";


const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {

    const auth = getAuth();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        return onAuthStateChanged(auth, listenAuth);
    }, []);

    const listenAuth = async (userState) => {
        setUser(auth.currentUser);
        setLoading(false);
    };

    const signIn = async ({ email, password }) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // console.log('Firebase authentication response:', userCredential.user);
                setUser(auth.currentUser);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("firebase auth error", errorCode, errorMessage);
                setLoading(false)
            });
    };

    const signOut = async () => {
        setLoading(true)
        signOutFirebase(auth)
            .then(() => {
                console.log("signOut");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("firebase auth error", errorCode, errorMessage);
                setLoading(false)
            });
    };

    return (
        <UsuarioContext.Provider value={{ user, loading, signIn, signOut }}>
            {children}
        </UsuarioContext.Provider>
    );
};

export { UsuarioContext, UsuarioProvider };
