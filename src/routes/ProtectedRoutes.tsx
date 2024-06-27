import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuthenticated = true;

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