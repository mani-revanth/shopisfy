import { createContext } from "react";
import React,{useState,useEffect,useContext} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
} from "firebase/auth";
import {auth} from "../firebase";

const userAuthContext=createContext();

export function UserAuthContextProvider({children}){

    const [user,setUser]=useState("");

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    function loggingIn(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    function googleSignIn()
    {
        const googleAuthProvider =new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider);
    }


    function logout(){
        return signOut(auth);
    }

    function passreset(email)
    {
        return sendPasswordResetEmail(auth,email);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[]);

    return(
        <userAuthContext.Provider value={{user ,signUp ,loggingIn , googleSignIn ,passreset,logout}}>{children}</userAuthContext.Provider>
    )
}

export  function UseUserAuth(){
    return useContext(userAuthContext);
}