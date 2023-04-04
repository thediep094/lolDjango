import React from "react";
import "../../styles/sections/shopBanner/shopBanner.scss";
import ButtonShop from "../../components/button/ButtonShop";
const ShopBanner = () => {
  return (
    <div className="shopBanner">
      <div className="shopBanner__image-container">
        <img
          src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltbe1aba24a0434e4b/6410e8f543153734d1474040/2023_SG-Figures_HP_hero_2560x722.png?auto=webp&width=1903&quality=85"
          alt=""
          className="shopBanner__img"
        />
      </div>

      <div className="shopBanner__container">
        <div className="shopBanner__content">
          <div className="shopBanner__content-wrapper">
            <div className="shopBanner__content-text">STAR GUARDIANS RISE!</div>
            <div className="shopBanner__content-button">
              <ButtonShop name="Shop now" />
            </div>
            {/* <canvas width={480} height={164}></canvas> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
