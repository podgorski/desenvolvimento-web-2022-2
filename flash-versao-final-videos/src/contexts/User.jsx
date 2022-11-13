import { useState } from 'react';
import { createContext } from 'react';

import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut as signOutFirebase
} from 'firebase/auth'
import { useEffect } from 'react';

const UsuarioContext = createContext({})

const UsuarioProvider = ({ children }) => {

    const auth = getAuth();

    const [user, setUser] = useState(false);

    useEffect(() => {
        return onAuthStateChanged(auth, listenAuth)
    }, [])

    const listenAuth = async (userState) => {
        console.log('listenAuth', auth.currentUser)
        setUser(auth.currentUser);

    }

    const signIn = (email, password) => {
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(auth.currentUser)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('firebase auth error', errorCode, errorMessage)
            })


    }

    const signOut = () => {

        signOutFirebase(auth).then(() => {
            //setUser(false)
        })

    }

    return (
        <UsuarioContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </UsuarioContext.Provider>
    )
}

export { UsuarioContext, UsuarioProvider }