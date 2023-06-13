import { selectIsLoggedIn } from "../../redux/authSlice";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RequireAuth({ children }) {
  const loggedIn = useSelector(selectIsLoggedIn);

  return loggedIn ? children : <Navigate to="/home" />;
}
