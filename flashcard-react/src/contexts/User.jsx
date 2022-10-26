import React, { createContext, useState } from "react";

const UsuarioContext = createContext({});

const UsuarioProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = () => {
        setUser(true);
    };

    const signOut = () => {
        setUser(false);
    };

    return (
        <UsuarioContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </UsuarioContext.Provider>
    );
};

export { UsuarioContext, UsuarioProvider };
