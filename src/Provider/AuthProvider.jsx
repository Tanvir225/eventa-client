/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import usePublicAxios from "../Hook/usePublicAxios";

export const AuthContext = createContext(null)

const googleAuthProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    //state
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    //usePublicAxios calling
    const axios = usePublicAxios()


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

    //password reset email
    const passwordReset = (email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }

    //logout user
    const logOut = async()=>{
        setLoading(true)

        try{
            //call logout endpoint for remove token
            await axios.post('/logout')

            //signout from firebase
            await signOut(auth)
            setUser(null)
        }
        catch(error){
                console.log("error during logout",error)
        }

        setLoading(false)
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
            console.log("current user", currentUser);

            //jwt post route and get token and remove token
            if (currentUser) {
                axios.post("/jwt",{email : currentUser?.email})
                .then(result=>{
                    console.log(result.data);
                    setLoading(false)
                })
            }

         
           
        }) 

        return ()=>{unsubscribe()}
    },[axios])

    //auth value as a object
    const authValue = {
        user,
        loading,
        signUp,
        login,
        passwordReset,
        logOut,
        googleLogin
    }
   return(
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
   )
};

export default AuthProvider;