import React from "react";
import "../../styles/sections/featuredProducts/productItem.scss";
import { IProduct } from "../../types/product";
type TProp = {
  data: IProduct;
};
const ProductItem = (data: TProp) => {
  return (
    <div className="productItem">
      <div className="productItem__img-wrapper">
        <img
          src={`http://127.0.0.1:8001${data.data.img}`}
          alt=""
          className="productItem__img"
        />
        <div className="productItem__tags">
          {data.data.tags.map((item, index) => {
            return (
              <div
                className="productItem__tag"
                style={{
                  backgroundColor: `${item.background}`,
                  color: `${item.color}`,
                }}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="productItem__title">{data.data.name}</div>
      <div className="productItem__price">${data.data.price}</div>
    </div>
  );
};

export default ProductItem;
