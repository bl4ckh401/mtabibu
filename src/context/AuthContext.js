import React, { useEffect, useState,useContext } from 'react';
import {auth} from '../firebase';

const AuthContext = React.createContext()
export function useAuth(){
    return useContext(AuthContext)
}

function AuthProvider(children){
    const [currentUser, setCurrentUser]= useState()
        
    function signupLogic(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }
    useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user =>{
        setCurrentUser(user)
    })
    return unsubscribe
    },[])

    const value = {
        currentUser,signupLogic}

         return(
        <AuthContext.Provider value={value}>
            
        </AuthContext.Provider>
    )       
    }
export default AuthProvider;