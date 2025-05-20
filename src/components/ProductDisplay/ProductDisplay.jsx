import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_half from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";


const ProductDisplay = (props) => {
  const { product } = props; // Corrected prop name
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="ProductDisplay">
      <div className="Product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="" height={"200px"} />
          <img src={product.image} alt="" height={"200px"} />
          <img src={product.image} alt="" height={"200px"} />
       
        </div>
        <div className="product-display-image">
          <img
            className="productDisplay-main-image"
            src={product.image}
            alt=""
            height={"300px"}
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={star_icon} alt="" height={"20px"} />
          <img src={star_icon} alt="" height={"20px"} />
          <img src={star_icon} alt="" height={"20px"} />
          <img src={star_icon} alt="" height={"20px"} />
          <img src={star_half} alt="" height={"20px"} />

          <p>(130)</p>
        </div>

        <div className="product-display-right-prices">
          <div className="productDisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productDisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>

        <div className="productDisplay-right-discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quia,
          nam iure nemo unde fuga aperiam dolor, eum nulla corrupti fugit, nobis
          quas! Itaque tempora veniam dolorum pariatur consequuntur ullam?
        </div>

        <div className="productDisplay-right-size">
          <h1>Select Size</h1>
          <div className="productDisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
        <div className="productDisplay-right-category">
          <span>
            Category: <span>Women ,T-Shirt, Crop-Top</span>
          </span>
        </div>
        <div className="productDisplay-right-category">
          <span>
            Tags: <span>Modern ,Latest, Trend shorts</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
