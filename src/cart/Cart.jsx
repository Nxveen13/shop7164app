import React from "react";
import "./cart.css";
const Cart = ({ productInfo, cartItem, removeFromCart,category,toggleFilterBtn,getTotalCartAmount }) => {
  return (
    <div className="cart">
      <div className="root">
        Home /<span className="root_path"> {category}.</span>
      </div>
      <div className="filter_btn_box">
        <span className="filter_btn" onClick={toggleFilterBtn}>
          Filter
        </span>
      </div>
      <h3> {category}</h3>
      <div className="cart_head">
        <p>products</p>
        <p>title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>
      {productInfo.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div className="cart_list">
              <img src={e.img} alt="" className="cart_img"/>
              <p>{e.product_name}</p>
              <p>{e.new_price}</p>
              <p>{cartItem[e.id]}</p>
              <p>{e.new_price * cartItem[e.id]}</p>
              <button
                className="cart_remove_btn"
                onClick={() => {
                  removeFromCart(e.id);
                }}
              >
                Remove
              </button>
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="total_box">
        <h4>Cart Total</h4>
        <div className="subtotal_box">
          <p className="subtotal">Subtotal</p>
          <p className="subtotal">${getTotalCartAmount()}</p>
        </div>
        <div className="shiping_box">
          <p className="shiping">shiping</p>
          <p className="shiping">free</p>
        </div>
        <div className="total_price_box">
          <p className="total">total</p>
          <p className="total">${getTotalCartAmount()}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
