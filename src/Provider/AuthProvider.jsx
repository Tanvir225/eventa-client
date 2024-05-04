/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const googleAuthProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    //state
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)


    //create user
    const signUp = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //login user
    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout user
    const logOut = ()=>{
        setLoading(true)
        return auth.signOut(auth)
    }

    //google login
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleAuthProvider)
    }

    //useEffect subscribe user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            console.log("current user", currentUser);
        }) 

        return ()=>{unsubscribe()}
    },[])
    //auth value as a object
    const authValue = {
        user,
        loading,
        signUp,
        login,
        logOut,
        googleLogin
    }
   return(
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
   )
};

export default AuthProvider;