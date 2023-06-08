import React, { useEffect, useState } from "react";
import ProductItem from "./productItem";
import { IProduct } from "../../types/product";
import "../../styles/sections/featuredProducts/featuredProduct.scss";
import axios from "axios";
const FeaturedProducts = () => {
  const [testData, setTestData] = useState<IProduct[]>([]);
  const [testData1, setTestData1] = useState<IProduct[]>([]);
  const [testData2, setTestData2] = useState<IProduct[]>([]);
  const [testData3, setTestData3] = useState<IProduct[]>([]);
  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axios.get(`http://localhost:8001/apparels/`);
        const res2 = await axios.get(`http://localhost:8011/books/`);
        const res3 = await axios.get(`http://localhost:8012/shoes/`);
        const res4 = await axios.get(`http://localhost:8013/clothes/`);
        setTestData(res.data);
      } catch (error) {
        console.log(error);
      }

      try {
        const res2 = await axios.get(`http://localhost:8011/books/`);
        setTestData1(res2.data);
      } catch (error) {
        console.log(error);
      }

      try {
        const res3 = await axios.get(`http://localhost:8012/shoes/`);
        setTestData2(res3.data);
      } catch (error) {
        console.log(error);
      }

      try {
        const res4 = await axios.get(`http://localhost:8013/clothes/`);
        setTestData3(res4.data);
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
                      <ProductItem
                        type={"product"}
                        data={item as IProduct}
                        key={index}
                      />
                    </a>
                  </div>
                );
              })
            : null}

          {testData1
            ? testData1.map((item: any, index) => {
                return (
                  <div
                    className="col-12 col-lg-3"
                    style={{
                      marginBottom: "10px",
                    }}
                    key={index}
                  >
                    <a href={`/books/${item.id}`}>
                      <ProductItem
                        type={"books"}
                        data={item as IProduct}
                        key={index}
                      />
                    </a>
                  </div>
                );
              })
            : null}

          {testData2
            ? testData2.map((item: any, index) => {
                return (
                  <div
                    className="col-12 col-lg-3"
                    style={{
                      marginBottom: "10px",
                    }}
                    key={index}
                  >
                    <a href={`/shoes/${item.id}`}>
                      <ProductItem
                        type={"shoes"}
                        data={item as IProduct}
                        key={index}
                      />
                    </a>
                  </div>
                );
              })
            : null}

          {testData3
            ? testData3.map((item: any, index) => {
                return (
                  <div
                    className="col-12 col-lg-3"
                    style={{
                      marginBottom: "10px",
                    }}
                    key={index}
                  >
                    <a href={`/clothes/${item.id}`}>
                      <ProductItem
                        type={"clothes"}
                        data={item as IProduct}
                        key={index}
                      />
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
