/** @format */

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Link from "next/link";
import { CartContext } from "./_app";

const { useContext } = require("react");

const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Header />
      <Nav />
      <main className="cart">
        {cart.length > 0 ? (
          <>
            <section className="cart__Products">
              {cart.map((product) => (
                <>
                  <h3>{product.title}</h3>
                  <div>{product.itemsBeingPurshased}</div>
                  <div>{product.price}</div>
                </>
              ))}
            </section>

            <section className="cart__total price">
              Total price: $
              {cart.reduce(
                (prevValue, currValue) =>
                  prevValue +
                  Number(currValue.price) *
                    Number(currValue.itemsBeingPurshased),
                0
              )}
            </section>

            <section className="cart__proceedToBuy">
              {" "}
              <a href="">Proceed to Buy</a>
            </section>
          </>
        ) : (
          <>
            <div>
              <p> Your cart is empty</p>
            </div>
            <div>
              <Link href={"/pages/"}>Back to products</Link>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default CartPage;
