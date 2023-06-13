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
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        setUser({
          email: user.email,
          userName: user.displayName,
          userID: user.uid,
          userPicture: user.photoURL,
        }),
      );
    } catch (error) {
      console.log(error);
      setIsError(error.code);
    } finally {
      setIsLoading(false);
    }
  };

  const signUpCall = async (email, password) => {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (user) => {
          if (user) {
            user.user.getIdToken().then((token) => {
              validateGoogleToken(token).then((res) => {
                dispatch(
                  setUser({
                    email: res.data.email,
                    userName: res.data.name,
                    userID: res.data.uid,
                    userPicture: res.data.picture,
                  }),
                );
              });
            });
          }
        },
      );
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
