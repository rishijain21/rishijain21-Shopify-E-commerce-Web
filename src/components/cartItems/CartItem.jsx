import React, { useContext } from "react";

import "./cartItem.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/remove.webp";
const CartItem = () => {
  const { all_product, cartItem, RemoveFromCart,getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="CartItem">
      <div className="cartItems-formate-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div>
              <div className="cartItems-formate-main">
                <img
                  src={e.image}
                  height={"100px"}
                  alt=""
                         />
                <p>{e.name}</p>
                <p> {e.new_price}</p>
                <button className="cart-items-quantity">{cartItem[e.id]}</button>
                <p>{e.new_price * cartItem[e.id]}</p>
                <img
                  className="cart-Item-remove-icon"
                  src={remove_icon}
                  alt=""
                  height={"20px"}
                  onClick={() => RemoveFromCart(e.id)}
                />
              </div> 
              <hr />
            </div>
          );
        }
        return null;
      })}

<div className="cart-items-down">
    <div className="cartItem-total">
        <h1>Cart Total</h1>
        <div>
            <div className="cat-item-total-item">
                <p>
                    Sub Total

                </p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
             <div className="cat-item-total-item">
                <p>
                    Shipping Fee

                </p>
                <p>Free</p>
            </div>
            <hr />
             <div className="cat-item-total-item">
                <p>
                    Total

                </p>
                <p>${getTotalCartAmount()}</p>
            </div>
          
        </div>
        <button>Proceed to CheckOut</button>
    </div>
    <div className="cart-item-promo-code">
        <p>If you have a promo-code, Enter here</p>
        <div className="cart-item-promo-box">
            <input type="text" placeholder="Promo code" />
           <button>Submit</button> 
        </div>
        
    </div>
</div>
    </div>
  );
};

export default CartItem;
