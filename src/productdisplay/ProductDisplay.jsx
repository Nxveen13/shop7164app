import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import "./productDisplay.css";

const ProductDisplay = ({ productInfo, addToCart }) => {
  const { productId } = useParams();
  const singleProduct = productInfo.find((e) => e.id === Number(productId));
  const releatedProduct = productInfo.filter((item) => {
    const brand = singleProduct.brand === item.brand;
    const rating = parseFloat(singleProduct.rating) === parseFloat(item.rating);
    const sex = singleProduct.sex === item.sex;
    return brand || rating || sex;
  });
  const products = releatedProduct.slice(0, 5);
  const releatedProductList = useMemo(
    () => products.sort(() => Math.random() - 0.5),
    []
  );
  return (
    <div className="product_info_display">
      <div className="root">
        Home /
        <span className="root_path">
          {" "}
          {singleProduct.sex}/{singleProduct.product_name}.
        </span>
      </div>
      <div className="product_info_box">
        <div className="product_info_display_left">
          <img
            src={singleProduct.img}
            alt=""
            className="product_info_box_img"
          />
        </div>
        <div className="product_info_display_right">
          <p className="singleProduct_brand">{singleProduct.brand}</p>
          <p className="singleProduct_name">{singleProduct.product_name}</p>
          <div className="description">
            A sneaker, also known as a trainer or athletic shoe, is a type of
            footwear primarily designed for sports and physical exercise.
            However, sneakers have evolved to be worn for casual and everyday
            activities as well.
          </div>
          <div className="size_box">
            <div className="six_head">Size</div>
            <div className="size">
              <div className="size_child">s</div>
              <div className="size_child">m</div>
              <div className="size_child">l</div>
              <div className="size_child">xl</div>
            </div>
          </div>
          <p className="price">
            <span className="new-price">${singleProduct.new_price}</span>
            <span className="old-price">${singleProduct.old_price}</span>
            <span className="offerprice">{singleProduct.offer}% off</span>
          </p>
          <div className="product_cart_btn">
            <button
              onClick={() => {
                addToCart(singleProduct.id);
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="releatedProduct">
        {releatedProductList.map((e) => {
          return (
            <div className="releatedProduct_item">
              <Link to={`/product/${e.id}`}>
                <img src={e.img} alt="" />
              </Link>
              <p className="rate">{e.rating}</p>
              <p className="name">{e.product_name}</p>
              <p className="releated_price">
                <span className="releated_new-price">
                  ${singleProduct.new_price}
                </span>
                <span className="releated_old-price">
                  ${singleProduct.old_price}
                </span>
                <span className="releated_offerprice">
                  {singleProduct.offer}% off
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductDisplay;
