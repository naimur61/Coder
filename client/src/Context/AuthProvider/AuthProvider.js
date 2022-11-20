import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/Firebase.config';
import { useEffect } from 'react';



export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
   const [them, setThem] = useState(true);
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   // createUser
   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   //Sign In with email pass
   const emailLogin = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }

   //Sign In with Google & Github
   const popUpLogin = (Provider) => {
      setLoading(true);
      return signInWithPopup(auth, Provider);
   }



   // Current user 
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser === null || currentUser.emailVerified === true) {
            setUser(currentUser)
         }
         setLoading(false);
      })
      return unsubscribe;
   }, [])


   // Email verify 
   const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser)
   };

   // user Profile
   const userProfileSet = (profile) => {
      setLoading(true);
      return updateProfile(auth.currentUser, profile);
   }


   // Reset password
   const forgotPassword = (email) => {
      setLoading(true);
      return sendPasswordResetEmail(auth, email);
   }


   // Log Out 
   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   }


   const authInfo = { loading, them, setThem, user, setUser, createUser, userProfileSet, verifyEmail, emailLogin, popUpLogin, forgotPassword, logOut };
   return (<AuthContext.Provider value={authInfo}>
      {children}
   </AuthContext.Provider>
   );
};

export default AuthProvider;