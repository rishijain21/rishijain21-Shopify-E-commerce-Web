import React from "react";
import "./Breadcrumbs .css";
import arrow_icon from "../../assets/arrow_icon.png";

const Breadcrumbs = ({ product }) => {
  if (!product) {
    return <div className="Bredcrums">Loading product details...</div>;
  }

  return (
      <div className="Bredcrums">
        Home <img src={arrow_icon} alt="arrow" height="10px" />
        SHOP <img src={arrow_icon} alt="arrow" height="10px" />
        {product.category} <img src={arrow_icon} alt="arrow" height="10px" />
        {product.name}
      </div>
  );
};

export default Breadcrumbs;
