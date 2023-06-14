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
          validateGoogleToken(token).then((res) => {
            const name = res.data.email.split("@");
            dispatch(
              setUser({
                isEmailVerified: res.data.email_verified,
                email: res.data.email,
                userName: res.data.displayName || name[0],
                userID: res.data.uid,
                userPicture:
                  res.data.picture ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJUeQCIV5gK-gudX5l3OIhRcmgnbtGDhExw&usqp=CAU",
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
