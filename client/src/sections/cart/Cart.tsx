import React, { useState, useEffect } from "react";
import "../../styles/sections/cart/cart.scss";
import ButtonShop from "../../components/button/ButtonShop";
import { IProduct } from "../../types/product";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ICartItem } from "../../types/cart";

const Cart: React.FC = () => {
  const [data, setData] = useState<ICartItem[]>();
  const user = useSelector((state: RootState) => state.account.user);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const res = await axios.get(`http://127.0.0.1:8003/cart/${user.id}`);
          setData(res.data.items);
          setTotalPrice(
            res.data.items.reduce(
              (acc: any, obj: any) => acc + obj.item.price * obj.quantity,
              0
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [user]);

  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <div className="cart">
      <div className="container cart-wrapper">
        <div className="row cart-wrapper-row">
          <div className="cart-items col-lg-8 col-12">
            <h1>Cart({data ? data.length : 0})</h1>
            <div className="cart-items__wrapper">
              <div className="cart-items__wrapper-heading grid-row">
                <div className="product-column">Product</div>
                <div className="product-price">Price</div>
              </div>

              <div className="cart-items__tiems">
                {data
                  ? data.map((item: ICartItem) => {
                      return (
                        <div className="grid-row">
                          <div className="cart-items__tiem product-column">
                            <div className="cart-items__item-img">
                              <img
                                src={`http://127.0.0.1:8001${item.item.img}`}
                                alt=""
                              />
                            </div>

                            <div className="cart-items__item-info product-meta">
                              <div className="cart-items__item-info-title">
                                {item.item.name}
                              </div>

                              <label className="cart-items__item-info-quantity">
                                Qty:{" "}
                                <input type="number" value={item.quantity} />
                              </label>
                            </div>
                          </div>

                          <div className="product-price">
                            <div className="cart-items__item-price">
                              ${item.item.price}
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
                  Subtotal({data ? data?.length : 0} items)
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
