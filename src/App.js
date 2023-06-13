import "./App.css";
import Layout from "./components/Layout/Layout";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/authSlice";
import { useEffect } from "react";
import { validateGoogleToken } from "./api";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userCred) => {
      if (userCred) {
        userCred.getIdToken().then((token) => {
          validateGoogleToken(token).then((data) => {
            dispatch(
              setUser({
                email: data.data.email,
                userName: data.data.displayName,
                userID: data.data.uid,
                userPicture: data.data.picture,
              }),
            );
          });
        });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <div className="w-full">
      <Layout />
    </div>
  );
}

export default App;
