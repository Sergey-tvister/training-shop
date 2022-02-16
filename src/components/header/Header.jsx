import phone from "./assets/image/phone_header.svg";
import map from "./assets/image/header_map.svg";
import clock from "./assets/image/header_clock.svg";
import facebook from "./assets/image/header_facebook.svg";
import twitter from "./assets/image/header_twitter.svg";
import insta from "./assets/image/header_incta.svg";
import pinterest from "./assets/image/header_P.svg";
import search from "./assets/image/header_search.svg";
import land from "./assets/image/header_land.svg";
import users from "./assets/image/header_users.svg";
import shopping from "./assets/image/header_shopping.svg";

import React from "react";

import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header_bar">
        <div className="phone_bar">
          <img src={phone} alt="phone"></img>
          <a href="tel:+375 29 100 20 30">+375 29 100 20 30</a>
        </div>

        <div className="map_bar">
          <img src={map} alt="map"></img>
          <p>Belarus, Gomel, Lange 17</p>
        </div>

        <div className="time_bar">
          <img src={clock} alt="all_time"></img>
          <p>All week 24/7</p>
        </div>

        <div className="apps_bar">
          <img src={facebook} alt="" id="1"></img>
          <img src={twitter} alt="" id="2"></img>
          <img src={insta} alt="" id="3"></img>
          <img src={pinterest} alt="" id="4"></img>
        </div>
      </div>
      <div className="header_menu">
        <div className="header_logo">
          <a href="/">
            <p>CleverShop</p>
          </a>
        </div>
        <div className="menu_items">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Beauty</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="menu_icons">
            <img src={search} alt=""></img>
            <img src={land} alt=""></img>
            <img src={users} alt=""></img>
            <img src={shopping} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
