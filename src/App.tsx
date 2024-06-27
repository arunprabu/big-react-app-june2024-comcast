/* component can have 
  1. TS 
  2. JSX 
  3. CSS (optional)
*/
import "./App.css";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import MainRoutes from "./routes/MainRoutes";

function App() {
  // must return JSX
  return (
    <BrowserRouter>
      <CartProvider>
        <Header></Header>

        <main className="container mt-5 pt-2">
          <MainRoutes />
        </main>
      </CartProvider>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
