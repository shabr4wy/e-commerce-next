/** @format */
import { createContext, useCallback, useState } from "react";

import {
  cart_From_Local_Sotrage,
  get_Cart_Form_Local_storage,
  add_Item_to_Cart_In_Local_Storage,
} from "@/modules/localStorage";

export const CartContext = createContext([]);
export const ItemsNumberContext = createContext(1);

export default function App({ Component, pageProps }) {
  const [itemsNumber, setItemsNumber] = useState(1);
  const [cart, setCart] = useState(
    cart_From_Local_Sotrage ? cart_From_Local_Sotrage : []
  );

  get_Cart_Form_Local_storage();

  add_Item_to_Cart_In_Local_Storage(cart);

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
