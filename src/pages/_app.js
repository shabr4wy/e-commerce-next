/** @format */

import { createContext, useCallback, useState } from "react";

export const CartContext = createContext([]);

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);

  const updateCart = useCallback(
    (newProduct) => {
      setCart([...cart, newProduct]);
    },
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      <Component {...pageProps} />
    </CartContext.Provider>
  );
}
