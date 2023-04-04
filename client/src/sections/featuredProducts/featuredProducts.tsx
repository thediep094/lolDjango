import React, { useEffect, useState } from "react";
import ProductItem from "./productItem";
import { IProduct } from "../../types/product";
import "../../styles/sections/featuredProducts/featuredProduct.scss";
import axios from "axios";
const FeaturedProducts = () => {
  const [testData, setTestData] = useState<IProduct[]>([]);
  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axios.get(`http://localhost:8001/apparels/`);
        setTestData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);
  return (
    <div className="featuredProduct">
      <div className="container">
        <div className="row">
          {testData
            ? testData.map((item: any, index) => {
                return (
                  <div
                    className="col-12 col-lg-3"
                    style={{
                      marginBottom: "10px",
                    }}
                    key={index}
                  >
                    <a href={`/product/${item.id}`}>
                      <ProductItem data={item as IProduct} key={index} />
                    </a>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
