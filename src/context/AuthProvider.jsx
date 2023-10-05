import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // state for users
  const [user, setUser] = useState([]);
  // set loading
  const [loading, setLoading] = useState(true);
  
  // file location
  
  // create new user with google
  const googleProvider = new GoogleAuthProvider()
  const loginWithGoogle = ()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // create new user with github
  const githubProvider = new GithubAuthProvider()
  const loginWithGithub = ()=>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }
  // create new users
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login user
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  // logout user
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };
  // update user
  const updateUser = (name, photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName:name, photoURL:photo
    })
  }

  // set up a observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    createUser,
    loginUser,
    loginWithGoogle,
    loginWithGithub,
    setLoading,
    logOut,
    user,
    updateUser,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
