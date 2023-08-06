import React from "react";
import { useState } from "react";
import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" destinationName={destination} />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} 
                to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>

            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>(per night)</small>
                  </span>
                  <span>
                    <input type="number" className="lsOptionInput" />
                  </span>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>(per night)</small>
                  </span>
                  <span>
                    <input type="number" className="lsOptionInput" />
                  </span>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <span>
                    <input
                      type="number"
                      min={1}
                      max={30}
                      className="lsOptionInput"
                      placeholder={options.adult}
                    />
                  </span>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <span>
                    <input
                      type="number"
                      min={0}
                      max={30}
                      className="lsOptionInput"
                      placeholder={options.children}
                    />
                  </span>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <span>
                    <input
                      type="number"
                      min={1}
                      max={30}
                      className="lsOptionInput"
                      placeholder={options.rooms}
                    />
                  </span>
                </div>
              </div>
            </div>
            <button className="lsBtn">Search</button>
          </div>
          <div className="listResult">
            <h1 className="lrHeader">{destination}: 953 properties found</h1>
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
