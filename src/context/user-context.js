import React, { useState } from 'react';

const UserCtx = React.createContext({
    userName: null,
    isLoggedIn: false,
    logIn: () => {},
    logOut: () => {}
});

export const UserCtxProvider = props => {

    const [userName, setUserName] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logInHandler = userName => {
        setUserName(userName);
        setIsLoggedIn(true);
    }

    const logOutHandler = () => {
        setUserName(null);
        setIsLoggedIn(false);
    }

    return <UserCtx.Provider value={{
        userName: userName,
        isLoggedIn: isLoggedIn,
        logIn: logInHandler,
        logOut: logOutHandler
    }}>{props.children}</UserCtx.Provider>;
}

export default UserCtx;
