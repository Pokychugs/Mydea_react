import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [usuarioContext, setUsuarioContext] = useState(null);

    return (
        <AuthContext.Provider value={{ usuarioContext, setUsuarioContext }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
