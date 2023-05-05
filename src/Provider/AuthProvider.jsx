import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useLocation } from 'react-router-dom';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider(); 
    const gitHubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading,setLoading]=useState(true);
    const createUser =(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const googleSignIn = () =>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const user = result.user;
            // console.log(user);
        })
        .catch(error =>{
            console.log("Error:",error.message);
        })
    }
    const gitHubSignIn = () =>{
        signInWithPopup(auth,gitHubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log("Error:",error.message);
        })
    }
    const signIn =(email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUser = (user,name,photo) =>{
        updateProfile(user, {
            displayName: name,
             photoURL: photo
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            console.log(error);
          });
          
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])
    const authInfo ={
        user,
        loading,
        createUser,
        updateUser,
        signIn,
        logOut,
        googleSignIn,
        gitHubSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;