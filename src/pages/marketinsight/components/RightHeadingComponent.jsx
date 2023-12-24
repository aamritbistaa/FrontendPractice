import React from "react";
import style from "./styles/RightHeadingComponent.module.scss";
const RightHeadingComponent = ({ Title, Secondary, value }) => {
  return (
    <div className={style.Heading}>
      <h3>{Title}</h3>
      {Secondary && (
        <div className={style.Heading_Search}>
          Choose {Secondary}:
          <div className={style.Heading_Search_Box}>
            <input value={value} />
            <img src="images/search.png" />
          </div>
        </div>
      )}
    </div>
  );
};

export default RightHeadingComponent;
