import "./App.css";
import Layout from "./components/Layout/Layout";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/authSlice";
import { useEffect } from "react";
import { validateGoogleToken } from "./api";
import { selectUserID } from "./redux/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserID);
  useEffect(() => {
    if (!userId) {
      const unsubscribe = auth.onAuthStateChanged(async (userCred) => {
        if (userCred) {
          userCred.getIdToken().then((token) => {
            validateGoogleToken(token).then((res) => {
              dispatch(
                setUser({
                  isEmailVerified: res.data.email_verified,
                  email: res.data.email,
                  userName: res.data.name,
                  userID: res.data.uid,
                  userPicture: res.data.picture,
                }),
              );
            });
          });
        }
      });
      return () => unsubscribe();
    }
    // eslint-disable-next-line
  }, [userId]);
  return (
    <div className="w-full">
      <ToastContainer />
      <Layout />
    </div>
  );
}

export default App;
