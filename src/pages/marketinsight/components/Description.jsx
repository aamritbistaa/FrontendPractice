import React from "react";
import style from "./styles/Description.module.scss";
const Description = () => {
  return (
    <div className={style.wrapper}>
      <h3>Following Graphs are Presented on this Page</h3>
      <div className={style.wrapper_details}>
        <div>
          <img src="./images/status-up.png" height={44} width={44} />
          <li>Specific Location Transactions</li>
          <li>Price Range-wise Transactions</li>
          <li>Total Sale Transactions</li>
          <li>Total Rent Transactions</li>
        </div>
        <div className={style.wrapper_details_second}>
          <img src="./images/presention-chart.png" height={44} width={44} />
          <h5>Category-wise Transactions</h5>
          <li>Property type-wise Transactions</li>
          <li>Number of Beds-wise Transactions </li>
          <li>All Developer Transactions</li>
          <li>All Location Transactions</li>
          <li>All Project Transactions</li>
        </div>
        <div className={style.wrapper_details_third}>
          <img src="./images/chart.png" height={44} width={44} />
          <h5>Top 10 Locations Transactions</h5>
          <li>Top 10 Locations Transactions:Property type-wise </li>
          <li>Top 10 Locations Transactions: Number of Beds-wise</li>
          <h5>Top 10 Projects Transactions</h5>
          <li>Top 10 Projects Transactions:Property type-wise </li>
          <li>Top 10 Projectss Transactions: Number of Beds-wise</li>
        </div>
      </div>
    </div>
  );
};

export default Description;
