import React from "react";
import style from "../../styles/ProductDisplay.module.scss";
const ProductDisplayCHILD = ({ item }) => {
  return (
    <div className={style.wrapper_product}>
      <img src={item.url} alt="productimage" />
      <div className={style.wrapper_product_info}>
        <p className={style.wrapper_product_info_title}>{item.title}</p>

        <p className={style.wrapper_product_info_currentprice}>
          Rs. {item.price.discount}
        </p>
        <p className={style.wrapper_product_info_oldprice}>
          <strike>Rs. {item.price.mrp}</strike>
          {!(item.price.discountPercent === "") && (
            <span>{item.price.discountPercent}</span>
          )}
        </p>
        {item.tagline != "" && (
          <p className={style.wrapper_product_info_tagline}>{item.tagline}</p>
        )}
      </div>
      <div className={style.wrapper_product_buttons}>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDisplayCHILD;
