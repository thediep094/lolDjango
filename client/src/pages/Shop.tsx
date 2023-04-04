import React from "react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import ShopBanner from "../sections/shopBanner/ShopBanner";
import FeaturedProducts from "../sections/featuredProducts/featuredProducts";

const Shop = () => {
  return (
    <div className="shop">
      <Header />
      <ShopBanner />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Shop;
