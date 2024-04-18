import React from "react";
import Card from "../components/card/Card";
import "./productpage.css";
const Productpage = ({
  category,
  toggleFilterBtn,
  productInfo,
  searchKey,
  colorFilter,
  brandFilter,
  ratingFilter,
  addToCart,
}) => {
  const filterItems = productInfo.filter((item) => {
    const matchCategory = category === item.sex;
    const matchSearch = item.product_name
      .toLowerCase()
      .includes(searchKey.toLowerCase());
    const matchColor = colorFilter === "" || item.color === colorFilter;
    const matchBrand = brandFilter === "" || item.brand === brandFilter;
    const matchRating =
      ratingFilter === "" ||
      parseFloat(item.rating) === parseFloat(ratingFilter);
    return (
      matchCategory && matchSearch && matchColor && matchBrand && matchRating
    );
  });
  return (
    <div className="offer">
      <div className="root">
        Home /<span className="root_path"> {category}.</span>
      </div>
      <div className="filter_btn_box">
        <span className="filter_btn" onClick={toggleFilterBtn}>
          Filter
        </span>
      </div>
      <h3>{category}</h3>
      <div className="product_item">
        {filterItems.map((item) => (
          <Card key={item.id} product={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Productpage;
