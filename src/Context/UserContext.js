import React, { createContext, useState } from 'react';

export const authUser = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState('shk')
    const authInfo = { user }
    return (
        <authUser.Provider value={authInfo}>
            {children}
        </authUser.Provider>
    );
};

export default UserContext;