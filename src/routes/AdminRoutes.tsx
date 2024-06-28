import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AdminRoutes = () => {
  const { role } = useAuth();

  if (role === "SUPER_ADMIN") {
    console.log("allowed");
    return <Outlet />;
  } else {
    console.log("denied");
    return (
      <div className="alert alert-warning">
        You do not have rights to access this page!
      </div>
    );
  }
};

export default AdminRoutes;