import React from "react";
import "./featuredHome.css";

const FeaturedHome = () => {
  return (
    <div className="featuredHome">
      <div className="featuredHomeItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
          alt="Aparthotel Stare Miasto"
          className="featuredHomeImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Old Town, Poland, Kraków</span>
        <span className="fpPrice">
          Starting from <b> ₹ 14,753</b>
        </span>
        <div className="featuredHomeRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="featuredHomeItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o="
          alt="7Seasons Apartments Budapest"
          className="featuredHomeImg"
        />
        <span className="fpName">7Seasons Apartments Budapest</span>
        <span className="fpCity">06. Terézváros, Hungary, Bspanest</span>
        <span className="fpPrice">
          Starting from <b> ₹ 9,323</b>
        </span>
        <div className="featuredHomeRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="featuredHomeItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o="
          alt="numa I Vita Apartments"
          className="featuredHomeImg"
        />
        <span className="fpName">numa I Vita Apartments</span>
        <span className="fpCity">Fortezza da Basso, Italy, spanence</span>
        <span className="fpPrice">
          Starting from <b> ₹ 32,400</b>
        </span>
        <div className="featuredHomeRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="featuredHomeItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o="
          alt="Cheval Three Quays"
          className="featuredHomeImg"
        />
        <span className="fpName">Cheval Three Quays at The Tower London</span>
        <span className="fpCity">City of London, United Kinspan, London</span>
        <span className="fpPrice">
          Starting from <b> ₹ 64,730</b>
        </span>
        <div className="featuredHomeRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHome;
