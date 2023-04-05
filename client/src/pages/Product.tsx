import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SwiperCore, { EffectFade, Navigation, Pagination, Thumbs } from "swiper";
import "swiper/swiper.min.css";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import ButtonShop from "../components/button/ButtonShop";
import "../styles/pages/Product.scss";
import { IProduct } from "../types/product";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

SwiperCore.use([Navigation, Thumbs]);
const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const user = useSelector((state: RootState) => state.account.user);
  const [openDescription, setOpenDescription] = useState(false);
  const [testData, setTestData] = useState<IProduct>();
  const { id } = useParams();
  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8001/apparels/${id}/`);
        setTestData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  const handleAddToCart = (product_id: number) => {
    const addCart = async () => {
      try {
        if (user) {
          const data = {
            product_id: product_id,
            itemType: "apparel",
            quantity: 1,
          };
          const res = await axios.post(
            `http://127.0.0.1:8003/cart/add/${user.id}/`,
            data
          );
          if (res.status == 200) alert("Add successfully");
        }
      } catch (error) {
        console.log(error);
      }
    };
    addCart();
  };
  return (
    <div className="product">
      <Header />
      {testData ? (
        <div className="product-wrapper">
          <div className="product-wrapper__img">
            <div className="product-wrappper__img-swiper">
              <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={"auto"}
                centeredSlides={true}
                centeredSlidesBounds={true}
                watchSlidesProgress={true}
                direction="vertical"
                className="product-wrapper__img-thumbs"
              >
                {testData.thumbnail_images.map((item: any, index: any) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={`http://127.0.0.1:8001${item.img}`} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                modules={[EffectFade, Pagination]}
                effect="fade"
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper }}
                className="product-wrapper__img-main"
              >
                {testData.thumbnail_images.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img src={`http://127.0.0.1:8001${item.img}`} alt="" />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="product-wrapper__img-more">
              {testData.images.map((item, index) => {
                return (
                  <div className="product-wrapper__img-more-item" key={index}>
                    <img src={`http://127.0.0.1:8001${item.img}`} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product-wrapper__info">
            <div className="shape-top"></div>
            <div className="product-wrapper__info-tags">
              {testData.tags.map((tag: any, index: any) => {
                return (
                  <div
                    className="product-wrapper__info-tag"
                    style={{
                      backgroundColor: `${tag.background}`,
                      color: `${tag.color}`,
                    }}
                    key={index}
                  >
                    {tag.title}
                  </div>
                );
              })}
            </div>

            <div className="product-wrapper__info-heading">
              <div className="product-wrapper__info-title">{testData.name}</div>
              <div className="product-wrapper__info-price">
                ${testData.price}
              </div>
            </div>

            <div
              className="product-wrapper__info-button"
              onClick={() => handleAddToCart(testData.id)}
            >
              <ButtonShop name={`${testData.price} - Add to Cart`} />
            </div>

            <div className="product-wrapper__info-alert">
              This product is a collector's item intended for ages 14+
            </div>
            <div className="product-wrapper__info-estimate">
              Estimated ship date: Jan 31, 2024
            </div>

            <div className="product-wrapper__info-description">
              <div
                className="product-wrapper__info-description-heading"
                onClick={() => setOpenDescription(!openDescription)}
              >
                Description
                <div
                  className={`product-wrapper__info-description-svg ${
                    openDescription ? "active" : ""
                  }`}
                >
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div
                className={`product-wrapper__info-description-content ${
                  openDescription ? "active" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: testData.description }}
              ></div>
            </div>
            <div className="shape-bot"></div>
          </div>
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default Product;
