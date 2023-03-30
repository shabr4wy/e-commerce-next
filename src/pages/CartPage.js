/** @format */

import Header from "@/components/Header";
import Nav from "@/components/Nav";

const { useContext } = require("react");

const CartPage = () => {
  return (
    <>
      <Header />
      <Nav />
      <main className="cart">
        <div>Your cart is empty</div>
      </main>
    </>
  );
};

export default CartPage;
