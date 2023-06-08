import { useState } from "react";
import React from "react";
import "../../styles/sections/checkout/OrderSummary.scss";
import { IProduct } from "../../types/product";

interface OrderSummaryProps {
  products: IProduct[];
  subtotal: number;
  shippingFee?: number;
  total: number;
}

const OrderSummary = ({ products, subtotal, shippingFee = 0, total }: any) => {
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const toggleOrderSummary = () => {
    setShowOrderSummary(!showOrderSummary);
  };
  console.log(products);
  return (
    <div className="checkout-main">
      <div className="toggle" onClick={toggleOrderSummary}>
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </span>
        <span className="toggle-title">Order summary</span>
        <span className="total">${total.toFixed(2)}</span>
      </div>
      <div className="order-summary-normal">
        {products?.map((product: IProduct) => (
          <div key={product.id} className="product-main">
            <div className="left">
              <img
                src={`http://127.0.0.1:${
                  product.itemType == "product"
                    ? "8001"
                    : product.itemType == "book"
                    ? "8011"
                    : product.itemType == "clothe"
                    ? "8013"
                    : product.itemType == "shoe"
                    ? "8012"
                    : ""
                }${product.item.img}`}
                alt="image"
              />
              <div className="product-name">
                <span>{product.item.name}</span>
                {/* <span>{product.tag}</span> */}
              </div>
            </div>
            <div className="right">
              <span>
                ${product.item.price} x {product.quantity}
              </span>
            </div>
          </div>
        ))}

        <div className="subtotal">
          <span className="sub">Subtotal</span>
          <span className="sub-total">${subtotal.toFixed(2)}</span>
        </div>
        {shippingFee > 0 && (
          <div className="shipping-fee">
            <span className="ship">Shipping Fee</span>
            <span className="ship-fee">Free</span>
          </div>
        )}
        <div className="total">
          <span className="title">Total</span>
          <span className="title-total">${total.toFixed(2)}</span>
        </div>
      </div>
      {showOrderSummary && (
        <div className="order-summary">
          {products?.map((product: IProduct) => (
            <div key={product.id} className="product-main">
              <div className="left">
                <img
                  src={`http://localhost:3000/images/${product.images}`}
                  alt="image"
                />
                <div className="product-name">
                  <span>{product.name}</span>
                  {/* <span>{product.tag}</span> */}
                </div>
              </div>
              <div className="right">
                <span>
                  ${product.price} x {product.quantity}
                </span>
              </div>
            </div>
          ))}

          <div className="subtotal">
            <span className="sub">Subtotal</span>
            <span className="sub-total">${subtotal.toFixed(2)}</span>
          </div>
          {shippingFee > 0 && (
            <div className="shipping-fee">
              <span className="ship">Shipping Fee</span>
              <span className="ship-fee">Free</span>
            </div>
          )}
          <div className="total">
            <span className="title">Total</span>
            <span className="title-total">${total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
