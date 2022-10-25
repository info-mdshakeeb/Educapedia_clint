import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Config/Firebase.init';
import AlartMessage from '../Hooks/AlartMessage';

export const authUser = createContext();
const auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const { successMessage } = AlartMessage()

const UserContext = ({ children }) => {
    const [user, setUser] = useState('')
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const [bookDetails, setBookDetails] = useState('');

    //login & signUp f:
    const createUser = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);
    const loginWithEmail = (email, pass) => signInWithEmailAndPassword(auth, email, pass);
    const logutOut = () => signOut(auth).then(re => successMessage('Logut Successfull'))
    const googlelogin = () => signInWithPopup(auth, Provider);

    //Update user information :
    const setUserNAme = (name, url) => updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: url
    })
    const varifymail = () => sendEmailVerification(auth.currentUser);
    const updatePassword = (email) => sendPasswordResetEmail(auth, email)

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setloading(false);
        })
        return () => {
            unsuscribe();
        }
    }, [])

    const authInfo = {
        user, setUser, error, setError,
        loading, setloading, bookDetails, setBookDetails,
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