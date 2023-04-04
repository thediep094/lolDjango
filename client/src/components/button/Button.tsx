import React from "react";
import "../../styles/components/button.scss";
type TProp = {
  name: String;
};

const Button = (prop: TProp): any => {
  return (
    <div className="button">
      <div className="button-content">{prop.name}</div>
    </div>
  );
};

export default Button;
