import React from 'react';
import { createContext } from 'react';
export const Authcontext = createContext()
const UserContext = ({ children }) => {
    const user = { email: 'llll' }
    const authinfo = { user }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default UserContext;