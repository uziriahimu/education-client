import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app)
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const authInfo = { user, createUser, signIn, logOut, providerLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;