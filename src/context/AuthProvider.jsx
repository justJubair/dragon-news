import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  // state for users
  const [user, setUser] = useState([]);
      // set up a observer
      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
          setUser(currentUser)
        })
        return ()=>{
          unsubscribe();
        }
      },[])
    // create new users
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout user
    const logOut = ()=>{
      return signOut(auth)
    }
    const authInfo = {
       createUser,
       loginUser,
       logOut,
       user
    }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
    children:PropTypes.node
}
export default AuthProvider
