import React, { useState } from "react";
import "../../styles/sections/cart/cart.scss";
import ButtonShop from "../../components/button/ButtonShop";
import { IProduct } from "../../types/product";

const Cart: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([
    {
      id: 2,
      img: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt580be0785b3cde05/6410e53d7af6422f7a249cfd/2023_SG_Ecomm_Ahri_Front_Shot_Thumb_1.png",
      name: "Good Smile Star Guardian Ahri 1/7 Scale Statue",
      price: 214.99,
      compare_at_price: 0,
      description:
        "<div><p>Charismatic team captain and lover of ice cream sundaes, this 1/7 scale statue of Star Guardian Ahri and magical medium Kiko embodies the duo's charm and sass to defend the light of the cosmos!</p><p>From the minute frills on her Star Guardian uniform to the voluminous flow of all nine of her tails, no detail has been left untouched and Star Guardian Ahri comes perched on a heart-shaped charm base to stand her ground against the forces of darkness.</p><p><b>Approximate Dimensions:</b></p><ul><li>Height: 14.6 in / 37 cm</li></ul><p>Made in partnership with our friends at Good Smile Arts Shanghai</p></div>",
      estimate_ship_date: "Jan 31, 2024",
      tags: [
        {
          title: "preorder",
          color: "#2b2a39",
          background: "#ffffff",
        },
      ],
      thumbnail_images: [
        {
          alt: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt580be0785b3cde05/6410e53d7af6422f7a249cfd/2023_SG_Ecomm_Ahri_Front_Shot_Thumb_1.png",
          img: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt580be0785b3cde05/6410e53d7af6422f7a249cfd/2023_SG_Ecomm_Ahri_Front_Shot_Thumb_1.png",
        },
        {
          alt: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt4816b992f02bb56d/6410e55894e69a2df8111330/2023_SG_Ecomm_Ahri_Front_Shot_2.png",
          img: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt4816b992f02bb56d/6410e55894e69a2df8111330/2023_SG_Ecomm_Ahri_Front_Shot_2.png",
        },
        {
          alt: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt9d5ac18df04cec20/6410e5584fd99f36ebe2406b/2023_SG_Ecomm_Ahri_Angled_Shot_1.png",
          img: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt9d5ac18df04cec20/6410e5584fd99f36ebe2406b/2023_SG_Ecomm_Ahri_Angled_Shot_1.png",
        },
        {
          alt: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt028002fd6cfca777/6410e558ae13fd108292e0b3/2023_SG_Ecomm_Ahri_Back_Shot_1.png",
          img: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt028002fd6cfca777/6410e558ae13fd108292e0b3/2023_SG_Ecomm_Ahri_Back_Shot_1.png",
        },
      ],
      images: [
        {
          alt: "dsa",
          img: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltcacf223b45b117d9/6410e56c6d0cf81016ab998c/2023_SG_Ecomm_Ahri_Closeup_Shot_1.png?auto=webp&width=729&quality=85",
        },
        {
          alt: "dasd",
          img: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltd9d7800441b67887/6410e56f4fd99f36ebe2406f/2023_SG_Ecomm_Ahri_Front_Shot_PDP_1.png?auto=webp&width=983&quality=85",
        },
        {
          alt: "dasd",
          img: "https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt483bf0d0c0247030/6410e57426b2ac6bf80ecf28/2023_SG_Ecomm_Ahri_Detail_Shot_1.png?auto=webp&width=729&quality=85",
        },
      ],
    },
  ]);

  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div className="cart">
      <div className="container cart-wrapper">
        <div className="row cart-wrapper-row">
          <div className="cart-items col-lg-8 col-12">
            <h1>Cart({0})</h1>
            <div className="cart-items__wrapper">
              <div className="cart-items__wrapper-heading grid-row">
                <div className="product-column">Product</div>
                <div className="product-price">Price</div>
              </div>

              <div className="cart-items__tiems">
                {data
                  ? data.map((item: IProduct) => {
                      return (
                        <div className="grid-row">
                          <div className="cart-items__tiem product-column">
                            <div className="cart-items__item-img">
                              <img src={item.img} alt="" />
                            </div>

                            <div className="cart-items__item-info product-meta">
                              <div className="cart-items__item-info-title">
                                {item.name}
                              </div>

                              <label className="cart-items__item-info-quantity">
                                Qty: <input type="number" value={1} />
                              </label>
                            </div>
                          </div>

                          <div className="product-price">
                            <div className="cart-items__item-price">
                              ${item.price}
                            </div>

                            <div className="cart-items__item-remove">
                              Remove
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : "Cart Empty"}
              </div>
            </div>
          </div>
          <div className="cart-totals col-lg-4 col-12">
            <div className="cart-totals__info">
              <div className="cart-totals__info-heading">
                <div className="cart-totals__subtitle">
                  Subtotal({data.length} items)
                </div>
                <div className="cart-totals__price">${totalPrice}</div>
              </div>
              <ButtonShop name={"CHECK OUT"} />
            </div>

            <div className="cart-totals__message">
              Taxes and shipping are calculated at checkout.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
