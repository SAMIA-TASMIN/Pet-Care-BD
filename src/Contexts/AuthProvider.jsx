import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase.init';

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const login =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const updateUser=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }
    
    const resetPassword =(email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
          
                setUser(currentUser);
                setLoading(false)
           
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const information ={
        createUser,
        login,
        user,
        setUser,
        logOut,
        loading,
        setLoading,
        googleLogin,
        updateUser,
        resetPassword

    }
    return (
        <AuthContext value={information}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;