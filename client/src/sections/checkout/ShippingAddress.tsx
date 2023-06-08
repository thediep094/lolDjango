import React, { useState } from "react";
import "../../styles/sections/checkout/ShippingAddress.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import axios from "axios";
import { IProduct } from "../../types/product";
import { useNavigate } from "react-router-dom";

type IShippingAddress = {
  account: string;
  email: string;
  fullname: string;
  address: string;
  phone: string;
};

const ShippingAddress = ({ products, total, cartId }: any) => {
  const user = useSelector((state: RootState) => state.account.user);
  const navigator = useNavigate();
  const [shippingAddress, setShippingAddress] = useState<IShippingAddress>({
    account: String(user?.id),
    email: "",
    fullname: String(user?.fullname),
    address: "",
    phone: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setShippingAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    const itemsCart = products.map((product: IProduct) => ({
      product_id: String(product.item.id),
      quantity: product.quantity,
      itemType: String(product?.itemType),
    }));
    const body = {
      ...shippingAddress,
      items: itemsCart,
    };
    console.log(body);

    try {
      // const res = await axios.get(`http://127.0.0.1:8005/order/1`);
      const res = await axios.post(`http://127.0.0.1:8005/order/create/`, body);
      const res2 = await axios.get(
        `http://127.0.0.1:8003/cart/clear/${user?.id}/`
      );
      console.log(res);
      alert("Payment successfully");
      navigator("/");
    } catch (error) {
      alert("Payment failure");
    }
  };

  return (
    <div className="form-shiping-address">
      <form className="contact-information">
        <label className="content-header1">Contact information</label>
        <label className="email">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={shippingAddress.email}
            onChange={handleInputChange}
          />
        </label>
        <label className="checkbox">
          <input type="checkbox" name="newsletter" />
          <p> Keep me up to date on news and exclusive offers</p>
        </label>
      </form>
      <form onSubmit={handleSubmit}>
        <div className="content">
          <label className="content-header">Shipping Address</label>
          <div className="name">
            <label>
              <input
                type="text"
                name="fullname"
                placeholder="fullname"
                value={user?.fullname}
                required
                disabled
              />
            </label>
            <label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={user?.username}
                required
                disabled
              />
            </label>
          </div>
          <label>
            <input
              type="tel"
              name="address"
              placeholder="Address"
              value={shippingAddress.address}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone (Optional)"
              value={shippingAddress.phone}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="button" onClick={() => handleSubmit()}>
          <div>Complete Payment</div>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
