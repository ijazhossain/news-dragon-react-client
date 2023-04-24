import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut,
        loading,
        resetPassword
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;