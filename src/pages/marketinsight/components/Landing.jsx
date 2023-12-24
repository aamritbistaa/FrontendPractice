import React from "react";

import style from "./styles/Landing.module.scss";
const Landing = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_Heading}>
        <h3>Market Insights</h3>
        <div className={style.wrapper_Heading_Secondary}>
          Dubai Property Sales Transactions In Depth Analysis
        </div>
      </div>
      <img src="images/Dubai.png" />
    </div>
  );
};

export default Landing;
