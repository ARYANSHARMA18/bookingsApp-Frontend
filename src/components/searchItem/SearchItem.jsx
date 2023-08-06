import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./searchItem.css";
import { faLeaf, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const SearchItem = (props) => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/326882063.webp?k=1a25b9d7bf0471d505f87d70142f17cc10ea5980ca3e0ba82c08c457dc0aeb8b&o="
        alt="EKO STAY -Rustic Creek"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">EKO STAY -Rustic Creek</h1>
        <span className="siManagedBy">Managed by a private host</span>
        <span className="siDistance">16.7 miles from centre</span>

        <span className="siSubtitle">
          <FontAwesomeIcon icon={faLeaf} className="leafIcon" />
          Travel Sustainable property
        </span>
        <span className="siFeature">
          2 entire villas • 4 bedrooms • 2 living rooms
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelSub">
          You can cancel later, so lock in this great price today!{" "}
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button className="siDetailsBtn">8.9</button>
        </div>
        <div className="siDeaitlsText">
          <span className="siCal">3 adults,1 night</span>
          <span className="siPrice">₹ 37,800</span>
          <span className="siTax">+₹ 6,804 taxes and charges</span>
          <button className="siCheckBtn">
            See avalibility <FontAwesomeIcon icon={faChevronRight} className="siBtnIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
