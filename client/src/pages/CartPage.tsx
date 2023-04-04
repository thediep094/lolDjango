import React, { Fragment, useEffect } from "react";
import Header from "../sections/Header";
import Cart from "../sections/cart/Cart";
import Footer from "../sections/Footer";

const CartPage = () => {
  return (
    <div className="CartPage">
      <Header />
      <Cart />
      <Footer />
    </div>
  );
};

export default CartPage;
