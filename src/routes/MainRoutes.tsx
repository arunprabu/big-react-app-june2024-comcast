import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import AddUser from "../components/user-manager/AddUser";
import UserDetails from "../components/user-manager/UserDetails";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import UserManagerPage from "../pages/UserManagerPage";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminRoutes from "./AdminRoutes";

const ContactPage = lazy(() => import("../pages/ContactPage"));
const NetflixPage = lazy(() => import("../pages/NetflixPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const TodosPage = lazy(() => import("../pages/TodosPage"));

const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Please wait while loading</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth/login" element={<LoginPage />} />

        {/* The following urls are protected. You need to login to access them */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/netflix" element={<NetflixPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/todos" element={<TodosPage />} />

          {/* The following urls are accessible only to SUPER_ADMIN */}
          <Route element={<AdminRoutes />}>
            <Route path="/user-manager" element={<UserManagerPage />} />
            <Route path="/user-manager/add" element={<AddUser />} />
            {/* URL param: userId */}
            <Route path="/user-manager/:userId" element={<UserDetails />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default MainRoutes