import React, { useState } from "react";
import { CgMenuLeft, CgSearch } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";
import "./nav.css";
import { Link } from "react-router-dom";
const NavBar = ({ handleChange, cartCount }) => {
  const [sedibar, setSidebar] = useState(false);
  const toggleBtn = () => {
    setSidebar(!sedibar);
  };
  return (
    <div className="navbar">
      <div className="nav_left">
        <div className="nav_menu_icon">
          <CgMenuLeft onClick={toggleBtn} />
        </div>
        <div className="logo">Sneaker</div>
        <ul className={sedibar ? "nav_list nav_list_open" : "nav_list"}>
          <Link to="/">
            {" "}
            <li className="nav_item">
              Offers <sup className="nav_sup">new</sup>
            </li>
          </Link>
          <Link to="/men">
            <li className="nav_item">Men</li>
          </Link>
          <Link to="/women">
            <li className="nav_item">Women</li>
          </Link>
          <Link to="/kid">
            <li className="nav_item">Kid</li>
          </Link>
          <Link to="/about">
            <li className="nav_item">About</li>
          </Link>
          <hr className="nav_hr" />
          <Link to="/cart">
            <li className="sidebar_icons side_bag">
              <HiOutlineShoppingBag className="nav_icon bag" />
              <span className="bag_child">{cartCount()}</span>
              Cart
            </li>
          </Link>
          <Link to="/login">
            <li className="sidebar_icons">
              <FaRegUserCircle className="nav_icon login" />
              Signin
            </li>
          </Link>
        </ul>
      </div>
      <div className="nav_middle">
        <CgSearch className="nav_search_icon" />
        <input
          type="search"
          name=""
          className="nav_search"
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>
      <div className="nav_right">
        <span className="nav_rigth_item">
          <IoIosNotificationsOutline className="nav_icon bell" />
          Notification
        </span>
        <Link to="/cart">
          <span className="nav_rigth_item bag_icon">
            <HiOutlineShoppingBag className="nav_icon bag" />
            <span className="cart_count">{cartCount()}</span>
            Cart
          </span>
        </Link>
        <Link to="/login">
          <span className="nav_rigth_item">
            <FaRegUserCircle className="nav_icon login" />
            Signin
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
