import React, { useState } from "react";
import style from "./styles/DateRange.module.scss";
const DateRange = () => {
  const [active, SetActive] = useState(1);
  const handleActive = (id) => {
    SetActive(id);
  };
  return (
    <div className={style.wrapper}>
      <h3>Select Date Range</h3>
      <div className={style.wrapper_buttonwrapper}>
        <button
          onClick={() => {
            handleActive(1);
          }}
          className={
            active === 1 ? `${style.wrapper_buttonwrapper_active}` : ""
          }>
          1W
        </button>
        <button
          onClick={() => {
            handleActive(2);
          }}
          className={
            active === 2 ? `${style.wrapper_buttonwrapper_active}` : ""
          }>
          1M
        </button>
        <button
          onClick={() => {
            handleActive(3);
          }}
          className={
            active === 3 ? `${style.wrapper_buttonwrapper_active}` : ""
          }>
          3M
        </button>
        <button
          onClick={() => {
            handleActive(4);
          }}
          className={
            active === 4 ? `${style.wrapper_buttonwrapper_active}` : ""
          }>
          6M
        </button>
        <button
          onClick={() => {
            handleActive(5);
          }}
          className={
            active === 5 ? `${style.wrapper_buttonwrapper_active}` : ""
          }>
          1Y
        </button>
        <button
          onClick={() => {
            handleActive(6);
          }}
          className={
            active === 6 ? `${style.wrapper_buttonwrapper_active}` : ""
          }>
          2Y
        </button>
      </div>
    </div>
  );
};

export default DateRange;
