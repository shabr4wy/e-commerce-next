/** @format */

export let cart_From_Local_Sotrage = null;

export const get_Cart_Form_Local_storage = () => {
  if (typeof window !== "undefined") {
    // Check if we're running in the browser.
    cart_From_Local_Sotrage = JSON.parse(window.localStorage.getItem("cart"));
  }
};

export function add_Item_to_Cart_In_Local_Storage(cart) {
  cart.length != 0 && window.localStorage.setItem("cart", JSON.stringify(cart));
}
