import React from "react";
import { MdStarRate } from "react-icons/md";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ product,addToCart }) => {
  return (
    <div className="card">
      <div className="image_box">
       <Link to={`/product/${product.id}`}><img src={product.img} alt="" className="image" /></Link> 
        <p className="rating">
          <MdStarRate className="star" /><span>{product.rating}</span>
        </p>
      </div>
      <div className="description_box">
        <p className="brand">{product.brand}</p>
        <p className="name">{product.product_name}</p>
        <p className="price">
          <span className="new-price">${product.new_price}</span>
          <span className="old-price">${product.old_price}</span>
          <span className="offerprice">{product.offer}% off</span>
        </p>
        <div className="cart-btn">
          <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
