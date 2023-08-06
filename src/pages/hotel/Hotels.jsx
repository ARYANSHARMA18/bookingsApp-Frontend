import { useState } from "react";
import "./hotels.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import List from "../../pages/list/List";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPersonSwimming,
  faBellConcierge,
  faParking,
  faPeopleRoof,
  faFan,
  faCircleXmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Hotels = () => {
  const [slideIndex, setSliderIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/326882063.jpg?k=de766b083abd83af5cf0ed670cc9a179d3f428f1662d533c09a0d1e27729984f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/326882093.jpg?k=66053812c2e1b96a071aac304488b2f1bb7db99592d666d4371f3c218b4f9505&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/326882106.jpg?k=c552ffa7a4ab59b5e3da407546ecb3c54bd426bc65bfd610fe654d66f62c1ffc&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/326882123.jpg?k=7ad959f300a4213db2f2716f282ab738e06f4e50f1e5b02038f338d3f08acaba&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/326882096.jpg?k=8d44fe351b3d0f16051a5d49fcbdb7fd5fecc3accb16a8746a524c45001c31e2&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/326882113.jpg?k=d5c36c2c337d8ab8f8a358b1e1b6bc88cab57948813eeee00725bd3261525337&o=&hp=1",
    },
  ];

  const handleOpen = (index) => {
    setSliderIndex(index);
    setOpen(true);
  };

  const handleMove = (dirc) => {
    let newSlideIndex;
    if (dirc === "l") {
      newSlideIndex = slideIndex === 0 ? 5 : slideIndex - 1;
    } else {
      newSlideIndex = slideIndex === 5 ? 0 : slideIndex + 1;
    }
    setSliderIndex(newSlideIndex);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className={open === true ? "sliderContainer" : "hotelContainer"}>
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideIndex].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">EKO STAY -Rustic Creek</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>
              P.No. B 133, Mahal Yojna, Near Akshya Patra,Jagatpura, 302033
              Jaipur, India
            </span>
          </div>
          <span className="hotelDistance">
            Excellent location 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  src={photo.src}
                  alt=""
                  onClick={() => handleOpen(i)}
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <p className="hotelDesc">
                Featuring mountain views, EKO STAY -Rustic Creek provides
                accommodation with an outdoor swimming pool, a garden and a
                terrace, around 20 km from Amber Fort. It is located 20 km from
                Seesh Mahal and offers room service.
                <br />
                <br />
                The air-conditioned villa is composed of 2 separate bedrooms, a
                living room, a fully equipped kitchen, and 2 bathrooms. Towels
                and bed linen are featured in the villa.
                <br />
                <br />
                Jalmahal is 24 km from the villa, while Jaigarh Fort is 27 km
                away. The nearest airport is Jaipur International Airport, 40 km
                from EKO STAY -Rustic Creek.
                <br />
                <br />
                Distance in property description is calculated using ©
                OpenStreetMap
              </p>
              <h3 className="hotelFacilitiesTitle">Most popular facilities</h3>
              <div className="hotelFacilites">
                <FontAwesomeIcon icon={faPersonSwimming} />
                <span>Outdoor Swimming Pool</span>
                <FontAwesomeIcon icon={faBellConcierge} />
                <span>Room Service</span>
                <FontAwesomeIcon icon={faParking} />
                <span>Free Parking</span>
                <FontAwesomeIcon icon={faPeopleRoof} />{" "}
                <span>Family rooms</span>
                <FontAwesomeIcon icon={faFan} />
                <span>Garden</span>
              </div>
            </div>
            <div className="hotelDetailsPrice">
              <h4 className="hotelPriceTitle">Perfect for a 3-nights Stay!</h4>
              <span className="hotelPriceDesc">
                Located in the heart of Jaipur, this property has an ecellant
                location score of 9.8
              </span>
              <h3>
                <b>₹ 100,800</b> (3 nights)
                <p>+₹ 18,144 taxes and charges</p>
              </h3>
              <button className="hpdBtn">Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotels;
