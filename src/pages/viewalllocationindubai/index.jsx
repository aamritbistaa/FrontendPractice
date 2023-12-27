import React from "react";
import style from "./styles/Viewalllocation.module.scss";

const index = () => {
  const data = [
    {
      Title: "Jumeirah Village Circle",
      Projects: 321,
      Img: "images/image 109.png",

      Sales: {
        value: "231B",
        volume: "123.7k",
      },
    },
    {
      Title: "Dubai Marina",
      Projects: 131,
      Img: "images/image 109.png",

      Sales: {
        value: "231B",
        volume: "123.7k",
      },
    },
    {
      Title: "Emaar South",
      Projects: 121,
      Img: "images/image 109.png",
      Sales: {
        value: "231B",
        volume: "123.7k",
      },
    },
    {
      Title: "Dubai Downtown",
      Projects: 111,
      Img: "images/image 109.png",
      Sales: {
        value: "231B",
        volume: "123.7k",
      },
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.container_header}>
        <div className={style.container_header_searchbox}>
          <input placeholder="Search sales history for any project or location*" />
          <button>Search</button>
        </div>

        <div className={style.container_header_filter}>
          {/* Filter */}

          <select>
            <option>Most Expensive to Most Affordable</option>
            <option>Second option</option>
          </select>

          <img src="./images/arrow-up-down.png" />
        </div>
      </div>

      <div className={style.container_wrapper}>
        {/* Wrapper */}
        <div className={style.container_wrapper_heading}>
          <h3>Locations in Dubai</h3>
          <span>Sort A to Z</span>
        </div>
        <div className={style.container_wrapper_cardCollection}>
          {data.map((item, idx) => (
            <div
              key={idx}
              className={style.container_wrapper_cardCollection_card}
              style={{ backgroundImage: item.Img }}>
              <img src={item.Img} />
              <div
                className={style.container_wrapper_cardCollection_card_content}>
                <h4>{item.Title}</h4>
                <div
                  className={
                    style.container_wrapper_cardCollection_card_content_other
                  }>
                  <button>
                    Total Projects <span> ({item.Projects})</span>
                    <img src="./images/linkicon.png" />
                  </button>
                  <div
                    className={
                      style.container_wrapper_cardCollection_card_content_other_sales
                    }>
                    <span>Total Sales Value: {item.Sales.value}</span>
                    <span>Total Sales Volume: {item.Sales.volume}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.container_wrapper_showmore}>Show More</div>
      </div>
    </div>
  );
};

export default index;
