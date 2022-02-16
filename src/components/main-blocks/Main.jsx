import React from "react";
import "./Main.scss";
function Main() {
  return (
    <div className="main_advantage">
      <div className="top_advantage">
        <div className="left_advantage">
          <div className="title_text">
            <p id="banner">BANNER</p>
            <p>YOUR TITLE TEXT</p>
          </div>
        </div>
        <div className="right_advantage">
          <div className="women_img">
            <div className="title">
              <a href="#">Women</a>
            </div>
          </div>
          <div className="man_img">
            <div className="title">
              <a href="#">Men</a>
            </div>
          </div>
          <div className="accessories_img">
            <div className="title_accessories"></div>
          </div>
        </div>
      </div>
      <div className="botoom_advantage"></div>
    </div>
  );
}
export default Main;
