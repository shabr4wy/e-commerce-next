/** @format */

export let cart_From_Local_Sotrage = null;

export const get_Cart_Form_Local_storage = () => {
  if (typeof window !== "undefined") {
    // Check if we're running in the browser.
    cart_From_Local_Sotrage = JSON.parse(window.localStorage.getItem("cart"));
  }
};
