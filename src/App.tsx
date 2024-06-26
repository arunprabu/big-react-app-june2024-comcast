/* component can have 
  1. TS 
  2. JSX 
  3. CSS (optional)
*/
import "./App.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NetflixPage from "./pages/NetflixPage";
import UserManagerPage from "./pages/UserManagerPage";
import AboutPage from "./pages/AboutPage";
import AddUser from "./components/user-manager/AddUser";
import UserDetails from "./components/user-manager/UserDetails";
import ProductsPage from "./pages/ProductsPage";
import { CartProvider } from "./contexts/CartContext";
import ContactPage from "./pages/ContactPage";

function App() {
  // must return JSX
  return (
    <BrowserRouter>
      <CartProvider>
        <Header></Header>

        <main className="container mt-5 pt-2">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/netflix" element={<NetflixPage />} />
            <Route path="/user-manager" element={<UserManagerPage />} />
            <Route path="/user-manager/add" element={<AddUser />} />
            {/* URL param: userId */}
            <Route path="/user-manager/:userId" element={<UserDetails />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </CartProvider>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
