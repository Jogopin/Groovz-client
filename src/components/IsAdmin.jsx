import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LoadingSpinner from "./LoadingSpinner";


export default function IsAdmin({ children }) {
  const { isLoggedIn, isAdmin, isLoading } = useAuth();

  if (isLoading) return <LoadingSpinner/>;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  } else if (!isAdmin) {
     
    return <Navigate to="/" />; // Redirect to the home page if not an admin
  } else {
    return children;
  }
}