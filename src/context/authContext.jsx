import { createContext, useEffect, useState } from "react";
import Loader from "../components/loader";
import { auth } from "../utils/utils";
import { onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext();

function AuthContextProvider({ children }) {

    const [user, setUser] = useState({
        isLoggin: false,
        userInfo: {},
    });
    const [loading, setLoading] = useState(true);

    function onAuthChange(user) {
        console.log('user', user);
        if (user) {
            setUser({
                isLogin: true,
                userInfo: {
                    name: user.displayName,
                    photoURL: user.photoURL,
                    email: user.email,
                }
            });
        } else {
            setUser({ isLogin: false, userInfo: {} });
        }
        setLoading(false);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, onAuthChange);
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>{loading ? (
            <Loader/>
        ) : (
            children
        )}</AuthContext.Provider>
    )
};

export default AuthContextProvider;

//  <> </>
// () => {}
// ? :  $