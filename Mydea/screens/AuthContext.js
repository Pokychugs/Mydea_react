import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [usuarioContext, setUsuarioContext] = useState(null);
    const [guardadosContext, setGuardadosContext] = useState(null);

    return (
        <AuthContext.Provider value={{ usuarioContext, setUsuarioContext, guardadosContext, setGuardadosContext }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
