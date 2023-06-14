import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { clearUserData, setUser } from "../redux/authSlice";
import { auth } from "../firebase";
import { validateGoogleToken } from "../api";

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
      return userCredential || null;
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
      if (user) {
        user.getIdToken().then((token) => {
          validateGoogleToken(token).then((res) => {
            dispatch(
              setUser({
                isEmailVerified: res.data.email_verified,
                email: res.data.email,
                userName: res.data.name || userDetails.name,
                userID: res.data.uid,
                userPicture:
                  res.data.picture ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJUeQCIV5gK-gudX5l3OIhRcmgnbtGDhExw&usqp=CAU",
              }),
            );
          });
        });
      }
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
