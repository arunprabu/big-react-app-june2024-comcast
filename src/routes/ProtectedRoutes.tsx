import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();

  if(isAuthenticated) {
    console.log("logged in");
    return <Outlet />
  } else  {
    console.log("Please login");
    // redirect the user to login page
    return <Navigate to={'/auth/login'} replace={false} />
  }
}

export default ProtectedRoutes