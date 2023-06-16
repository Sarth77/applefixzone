import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { clearUserData } from "../redux/authSlice";
import { auth } from "../firebase";

export default function useAuthentication() {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signInCall = async (email, password) => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return userCredential.user || null;
    } catch (error) {
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const signUpCall = async (userDetails) => {
    setIsLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password,
      );
      const user = res.user;
      return user;
    } catch (error) {
      console.log(error);
      setIsError(error.code);
    } finally {
      setIsLoading(false);
    }
  };

  const signOutCall = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      dispatch(clearUserData());
    } catch (error) {
      console.log(error);
      setIsError(error.code);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    signInCall,
    signUpCall,
    signOutCall,
  };
}
