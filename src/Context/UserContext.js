import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.cofig';
import { useEffect } from 'react';
export const Authcontext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signin = (email, password) => {
        setloading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    const providerlogin = (provider) => {
        setloading(true)
        return signInWithPopup(auth, provider);
    }
    const logout = () => {

        return signOut(auth);
    }
    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user here', currentUser);
            setUser(currentUser)
            setloading(false)
        });
        return () => unsubscribe()

    }, [])

    const authinfo = { user, createUser, signin, logout, providerlogin, loading }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default UserContext;