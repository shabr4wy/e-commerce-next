/** @format */

import { createContext, useCallback, useState } from "react";

export const CartContext = createContext([]);
export const ItemsNumberContext = createContext(1);

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  const [itemsNumber, setItemsNumber] = useState(1);

  const updateCart = useCallback(
    (newProduct) => {
      setCart([...cart, newProduct]);
    },
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      <ItemsNumberContext.Provider value={{ itemsNumber, setItemsNumber }}>
        <Component {...pageProps} />
      </ItemsNumberContext.Provider>
    </CartContext.Provider>
  );
}
