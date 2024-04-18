import React from "react";
import "./filterbox.css";
const FilterBox = ({ filterBoxState ,toggleFilterBtn,handleColorFilter,handleBrandFilter,handleRatingFilter}) => {
  return (
    <div className={filterBoxState?"filterbox filterboxopen":"filterbox"}>
      <div className="filter_h3">Color</div>
      <div className="filter_option">
        <input type="radio" name="color" className="filter_radio" value="Red" onChange={handleColorFilter}/>
        Red
      </div>
      <div className="filter_option">
        <input type="radio" name="color" className="filter_radio" value="Green" onChange={handleColorFilter}/>
        Green
      </div>
      <div className="filter_option">
        <input type="radio" name="color" className="filter_radio" value="Yellow" onChange={handleColorFilter}/>
        Yellow
      </div>
      <div className="filter_option">
        <input type="radio" name="color" className="filter_radio" value="Pink" onChange={handleColorFilter}/>
        pink
      </div>
      <div className="filter_h3">Rating</div>
      <div className="filter_option">
        <input type="radio" name="rating" className="filter_radio" value="4.2" onChange={handleRatingFilter}/>
        4.2
      </div>
      <div className="filter_option">
        <input type="radio" name="rating" className="filter_radio" value="4.3" onChange={handleRatingFilter}/>
        4.3
      </div>
      <div className="filter_option">
        <input type="radio" name="rating" className="filter_radio" value="4.5" onChange={handleRatingFilter}/>
        4.5
      </div>
      <div className="filter_option">
        <input type="radio" name="rating" className="filter_radio" value="4.7" onChange={handleRatingFilter}/>
        4.7
      </div>
      <div className="filter_h3">Brand</div>
      <div className="filter_option">
        <input type="radio" name="brand" className="filter_radio" value="Puma" onChange={handleBrandFilter}/>
        Puma
      </div>
      <div className="filter_option">
        <input type="radio" name="brand" className="filter_radio" value="Adidas" onChange={handleBrandFilter}/>
        Adidas
      </div>
      <div className="filter_option">
        <input type="radio" name="brand" className="filter_radio" value="Nike" onChange={handleBrandFilter}/>
        Nike
      </div>
      <div className="filter_option">
        <input type="radio" name="brand" className="filter_radio" value="Converse" onChange={handleBrandFilter}/>
        Converse
      </div>
      <hr className="filter_hr" />
      <div className="applye_box">
        <span className="applye_btn" onClick={toggleFilterBtn}>Applye</span>
      </div>
    </div>
  );
};

export default FilterBox;
