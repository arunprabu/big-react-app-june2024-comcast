/* component can have 
  1. TS 
  2. JSX 
  3. CSS (optional)
*/

import { useContext } from "react";
import MenuList from "./MenuList";
import { CartContext } from "../../contexts/CartContext";

// Functional Component with Named Function
function Header() {
  const { cartItems } = useContext<any>(CartContext);
  console.log(cartItems);
  // must return JSX
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            My Big React App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <MenuList />
            <button className="btn btn-warning">Cart({cartItems.length})</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;