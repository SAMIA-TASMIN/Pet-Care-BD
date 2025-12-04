import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    

    const information ={
        
    }
    return (
        <AuthContext value={information}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;