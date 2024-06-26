// Step 1: create context with createContext
// Step 2: Identify the components that need to share and access the data (ProductsPage, Header)
// Step 3: Provide data thru the context Provider to the list of components -- Refer App.tsx

import { createContext, useState } from "react";
import { IProduct } from "../models/IProduct";

interface CartContextProps {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

// Step 3: continues... LEt's create a new Component -- CartProvider
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // if you want to get the cart count from rest api -- call from here
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    console.log(product);
    setCartItems([...cartItems, product]);
  }

  return (
    <CartContext.Provider
      value={{ cartItems: cartItems, addToCart: addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

