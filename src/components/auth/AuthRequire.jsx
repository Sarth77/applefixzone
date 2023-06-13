import { selectIsLoggedIn } from "../../redux/authSlice";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthRedirect({ children }) {
  const loggedIn = useSelector(selectIsLoggedIn);

  return loggedIn ? <Navigate to="/home" /> : children;
}
