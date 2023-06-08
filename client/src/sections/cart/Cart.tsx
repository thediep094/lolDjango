import React, { useState, useEffect } from "react";
import "../../styles/sections/cart/cart.scss";
import ButtonShop from "../../components/button/ButtonShop";
import { IProduct } from "../../types/product";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ICartItem } from "../../types/cart";
import { Link } from "react-router-dom";

const Cart: React.FC = () => {
  const [data, setData] = useState<ICartItem[]>();
  const user = useSelector((state: RootState) => state.account.user);
  const [cartId, setCartId] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const fetchData = async () => {
    try {
      if (user) {
        const res = await axios.get(`http://127.0.0.1:8003/cart/${user.id}`);
        setData(res.data.items);
        setCartId(res.data.id);
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
  useEffect(() => {
    fetchData();
  }, [user]);

  const handleRemove = (id: number) => {
    const removeData = async () => {
      try {
        if (user) {
          const res = await axios.get(
            `http://127.0.0.1:8003/cart/remove/${user.id}/${id}/`
          );
          fetchData();
        }
      } catch (error) {
        console.log(error);
      }
    };
    removeData();
  };

  const handleQuantity = (id: number, quantity: number) => {
    const updateData = async () => {
      try {
        if (user) {
          const data = {
            quantity: quantity,
          };
          const res = await axios.post(
            `http://127.0.0.1:8003/cart/update/${user.id}/${id}`,
            data
          );
          fetchData();
        }
      } catch (error) {
        console.log(error);
      }
    };

    updateData();
  };

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
                      console.log(item.itemType);
                      return (
                        <div className="grid-row">
                          <div className="cart-items__tiem product-column">
                            <div className="cart-items__item-img">
                              <img
                                src={`http://127.0.0.1:${
                                  item.itemType == "product"
                                    ? "8001"
                                    : item.itemType == "book"
                                    ? "8011"
                                    : item.itemType == "clothe"
                                    ? "8013"
                                    : item.itemType == "shoe"
                                    ? "8012"
                                    : ""
                                }${item.item.img}`}
                                alt=""
                              />
                            </div>

                            <div className="cart-items__item-info product-meta">
                              <div className="cart-items__item-info-title">
                                {item.item.name}
                              </div>

                              <label className="cart-items__item-info-quantity">
                                Qty:{" "}
                                <input
                                  type="number"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    handleQuantity(
                                      item.id,
                                      Number(e.target.value)
                                    )
                                  }
                                />
                              </label>
                            </div>
                          </div>

                          <div className="product-price">
                            <div className="cart-items__item-price">
                              ${item.item.price}
                            </div>

                            <div
                              className="cart-items__item-remove"
                              onClick={() => handleRemove(item.id)}
                            >
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
                <div className="cart-totals__price">
                  ${totalPrice.toFixed(2)}
                </div>
              </div>
              <Link to={"/checkout"}>
                <ButtonShop name={"CHECK OUT"} />
              </Link>
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
