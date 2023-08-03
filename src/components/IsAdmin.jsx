import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


export default function IsAdmin({ children }) {
  const { isLoggedIn, isAdmin, isLoading } = useAuth();

  if (isLoading) return <p>Loading.......</p>;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  } else if (!isAdmin) {
     
    return <Navigate to="/" />; // Redirect to the home page if not an admin
  } else {
    return children;
  }
}