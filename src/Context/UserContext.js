import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import { createContext } from 'react';
import app from '../Firebase/Firebase.cofig';
import { useEffect } from 'react';
export const Authcontext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    console.log(children);
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user here', currentUser);
            setUser(currentUser)
        });
        return () => unsubscribe()
    }, [])

    const authinfo = { user, createUser, signin, logout }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default UserContext;