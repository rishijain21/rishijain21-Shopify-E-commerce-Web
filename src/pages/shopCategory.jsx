import React, { useContext, useState } from "react";
import "../CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import all_product from "../assets/all_product";
import drop_down_icon from "../assets/dropdown_icon.png";
import Item from "../components/items/item";

const shopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shop_category-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>showing 1-12</span> Out of 36 Product
        </p>
        <div className="shopCategory-sort">
          Shot By <img src={drop_down_icon} alt="" height={"20px"} />
        </div>
      </div>
      <div className="shopCategory_products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default shopCategory;
