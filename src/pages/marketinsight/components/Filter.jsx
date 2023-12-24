import React, { useState } from "react";
import style from "./styles/Filter.module.scss";
const Filter = () => {
  const [buyType, setBuyType] = useState("Buy");
  const handleBuyType = (typ) => {
    setBuyType(typ);
  };
  const [projectType, setProjectType] = useState("All");
  const handleProjectType = (typ) => {
    setProjectType(typ);
  };
  const [displayAdvance, setDisplayAdvance] = useState(false);

  return (
    <div className={style.wrapper}>
      <h3>Choose Specific Options</h3>
      <div className={style.wrapper_searchContainer}>
        <div className={style.wrapper_searchContainer_searchwrapper}>
          <div
            className={style.wrapper_searchContainer_searchwrapper_searchbox}>
            <img src="./images/search.png" />
            <input placeholder=" Search sales history for any project or location*" />
          </div>
          <button>Search</button>
        </div>
        <div
          className={
            style.wrapper_searchContainer_searchwrapper_buttonContainer
          }>
          <div
            className={
              style.wrapper_searchContainer_searchwrapper_buttonContainer_RoomOption
            }>
            <img src="./images/door.png" />
            <select name="Rooms" id="Rooms">
              <option>Number of Rooms</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>

          <div
            className={
              style.wrapper_searchContainer_searchwrapper_buttonContainer_Filter
            }>
            {console.log(displayAdvance)}
            <button
              onClick={() => setDisplayAdvance((prevValue) => !prevValue)}>
              <img src="./images/bi_filter.png" />
              Advanced Filters
            </button>
          </div>
        </div>
      </div>
      {displayAdvance && (
        <div className={style.wrapper_buttonContainer}>
          <div className={style.wrapper_buttonContainer_buttonWrapper}>
            <button
              onClick={() => handleBuyType("Buy")}
              className={
                buyType === "Buy"
                  ? `${style.wrapper_buttonContainer_buttonWrapper_active}`
                  : ""
              }>
              Cash
            </button>
            <button
              onClick={() => handleBuyType("Mortgage")}
              className={
                buyType === "Mortgage"
                  ? `${style.wrapper_buttonContainer_buttonWrapper_active}`
                  : ""
              }>
              Mortgage
            </button>
          </div>
          <div className={style.wrapper_buttonContainer_buttonWrapper}>
            <button
              onClick={() => handleProjectType("All")}
              className={
                projectType === "All"
                  ? `${style.wrapper_buttonContainer_buttonWrapper_active}`
                  : ""
              }>
              All
            </button>
            <button
              onClick={() => handleProjectType("Completed")}
              className={
                projectType === "Completed"
                  ? `${style.wrapper_buttonContainer_buttonWrapper_active}`
                  : ""
              }>
              Completed Project
            </button>
            <button
              onClick={() => handleProjectType("Ongoing")}
              className={
                projectType === "Ongoing"
                  ? `${style.wrapper_buttonContainer_buttonWrapper_active}`
                  : ""
              }>
              Ongoing project
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
