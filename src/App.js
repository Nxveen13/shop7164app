import { useState } from "react";
import NavBar from "./components/nav/NavBar";
import FilterBox from "./filterbox/FilterBox";
import Offer from "./main/Offer";
import productInfo from "./assets/productInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Productpage from "./productpage/Productpage";
import Cart from "./cart/Cart";
import ProductDisplay from "./productdisplay/ProductDisplay";
import FormBox from "./FormBox/FormBox";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";

function App() {
  //sidebar function
  const [filterBoxState, setFilterBoxState] = useState(false);
  const toggleFilterBtn = () => {
    setFilterBoxState(!filterBoxState);
  };
  //filter function
  const [searchKey, setSearchKey] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const handleChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handleColorFilter = (e) => {
    setColorFilter(e.target.value);
  };

  const handleBrandFilter = (e) => {
    setBrandFilter(e.target.value);
  };

  const handleRatingFilter = (e) => {
    setRatingFilter(e.target.value);
  };
  //cart function
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < productInfo.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [cartItem, setCartItem] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  // cart total function
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = productInfo.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };
  //cartcount
  const cartCount = () => {
    let totalCount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalCount += cartItem[item];
      }
    }
    return totalCount;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar handleChange={handleChange} cartCount={cartCount} />
        <FilterBox
          filterBoxState={filterBoxState}
          toggleFilterBtn={toggleFilterBtn}
          handleColorFilter={handleColorFilter}
          handleBrandFilter={handleBrandFilter}
          handleRatingFilter={handleRatingFilter}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Offer
                category="offers"
                toggleFilterBtn={toggleFilterBtn}
                productInfo={productInfo}
                searchKey={searchKey}
                colorFilter={colorFilter}
                brandFilter={brandFilter}
                ratingFilter={ratingFilter}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/men"
            element={
              <Productpage
                category="men"
                toggleFilterBtn={toggleFilterBtn}
                productInfo={productInfo}
                searchKey={searchKey}
                colorFilter={colorFilter}
                brandFilter={brandFilter}
                ratingFilter={ratingFilter}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/women"
            element={
              <Productpage
                category="women"
                toggleFilterBtn={toggleFilterBtn}
                productInfo={productInfo}
                searchKey={searchKey}
                colorFilter={colorFilter}
                brandFilter={brandFilter}
                ratingFilter={ratingFilter}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/kid"
            element={
              <Productpage
                category="kid"
                toggleFilterBtn={toggleFilterBtn}
                productInfo={productInfo}
                searchKey={searchKey}
                colorFilter={colorFilter}
                brandFilter={brandFilter}
                ratingFilter={ratingFilter}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                productInfo={productInfo}
                cartItem={cartItem}
                removeFromCart={removeFromCart}
                category="cart"
                toggleFilterBtn={toggleFilterBtn}
                getTotalCartAmount={getTotalCartAmount}
              />
            }
          />
          <Route path="/product/:productId" element={<ProductDisplay productInfo={productInfo}addToCart={addToCart}/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<FormBox/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
