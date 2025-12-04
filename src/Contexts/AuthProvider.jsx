import React, { useEffect } from 'react';
import { AuthContext } from './AuthContext';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.init';
const AuthProvider = ({children}) => {


    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const login =(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                console.log(currentUser);
            }
            else{
                console.log("error pawa gese");
            }
        })
        return ()=>unSubscribe()
    },[])

    const information ={
        createUser,
        login,

    }
    return (
        <AuthContext value={information}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;