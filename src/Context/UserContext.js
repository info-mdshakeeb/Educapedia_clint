import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Config/Firebase.init';
import AlartMessage from '../Hooks/AlartMessage';

export const authUser = createContext();
const auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const { successMessage } = AlartMessage()

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [error, setErro] = useState('');

    //login & signUp f:
    const createUser = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
    const loginWithEmail = (email, pass) => loginWithEmail(auth, email, pass);
    const logutOut = () => signOut(auth).then(re => successMessage('Logut Successfull'))
    const googlelogin = () => signInWithPopup(auth, Provider);

    //Update user information :
    const setUserNAme = (url, name) => updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: url
    }
    )
    const varifymail = () => sendEmailVerification(auth.currentUser);
    const updatePassword = (email) => sendPasswordResetEmail(auth, email)
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return () => unsuscribe();
    },)

    const authInfo = {
        user, setUser, error, setErro,
        googlelogin, createUser, loginWithEmail, logutOut,
        varifymail, setUserNAme, updatePassword
    }
    return (
        <authUser.Provider value={authInfo}>
            {children}
        </authUser.Provider>
    );
};

export default UserContext;