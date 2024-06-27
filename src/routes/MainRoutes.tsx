import { Routes, Route } from "react-router-dom";
import AddUser from "../components/user-manager/AddUser";
import UserDetails from "../components/user-manager/UserDetails";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NetflixPage from "../pages/NetflixPage";
import ProductsPage from "../pages/ProductsPage";
import TodosPage from "../pages/TodosPage";
import UserManagerPage from "../pages/UserManagerPage";
import ProtectedRoutes from "./ProtectedRoutes";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      
      {/* The following urls are protected. You need to login to access them */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/netflix" element={<NetflixPage />} />
        <Route path="/user-manager" element={<UserManagerPage />} />
        <Route path="/user-manager/add" element={<AddUser />} />
        {/* URL param: userId */}
        <Route path="/user-manager/:userId" element={<UserDetails />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes