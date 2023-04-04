import React from "react";
import "../../styles/components/button.scss";
type TProp = {
  name: String;
};

const ButtonShop = (prop: TProp): any => {
  return (
    <div className="buttonShop">
      <div className="button-content">
        / <span>{prop.name}</span>
      </div>
    </div>
  );
};

export default ButtonShop;
