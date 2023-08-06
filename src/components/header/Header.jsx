import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type, destinationName }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openDate, setOpenDate] = useState(false);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    rooms: 1,
  });

  const [openOptions, setOpenOptions] = useState(false);
  const [destination, setDestination] = useState("");

  const [warningOpen, setWarningOpen] = useState(false);

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }));
  };

  const handleSearchClick = (func) => {
    if (func === "date" && openOptions) {
      setOpenDate(!openDate);
      setOpenOptions(false);
    } else if (func === "date") {
      setOpenDate(!openDate);
    } else if (func === "options" && openDate) {
      setOpenOptions(!openOptions);
      setOpenDate(false);
    } else if (func === "options") {
      setOpenOptions(!openOptions);
    } else if (func === "input") {
      setOpenDate(false);
      setOpenOptions(false);
      setWarningOpen(false);
    } else if (func === "search") {
      setOpenDate(false);
      setOpenOptions(false);
    }
  };

  const handleClick = () => {
    if (destination !== "") {
      navigate("/hotels", { state: { destination, date, options } });
      setWarningOpen(false);
    } else {
      setWarningOpen(true);
    }
    handleSearchClick("search");
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        {warningOpen && (
          <div className="warning">
            Please enter a destination to start searching.
          </div>
        )}
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? it's Genius.
            </h1>
            <p className="headerDesc">
              Get reward for your travels - unlock instant savings of 10% or
              move with a free Booking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem focus">
                <FontAwesomeIcon icon={faBed} className="headerIcon bed" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  defaultValue={type === "list" ? destinationName : null}
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                  onClick={() => handleSearchClick("input")}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => handleSearchClick("date")}
                >
                  {`${format(date[0].startDate, "MM/dd/yyyy")} 
              to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  className="headerSearchText"
                  onClick={() => handleSearchClick("options")}
                >
                  {`${options.adult} adults · ${options.children} children · ${options.rooms} rooms`}
                </span>
                {openOptions && (
                  <div className="options">
                    <div className="optionsItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          className="optionControlButton"
                          onClick={() => handleOption("adult", "d")}
                          disabled={options.adult <= 1}
                        >
                          -
                        </button>
                        <span className="OptionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionControlButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optionsItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          className="optionControlButton"
                          onClick={() => handleOption("children", "d")}
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <span className="OptionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionControlButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optionsItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          className="optionControlButton"
                          onClick={() => handleOption("rooms", "d")}
                          disabled={options.rooms <= 1}
                        >
                          -
                        </button>
                        <span className="OptionCounterNumber">
                          {options.rooms}
                        </span>
                        <button
                          className="optionControlButton"
                          onClick={() => handleOption("rooms", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn search" onClick={handleClick}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
