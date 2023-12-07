import React from "react";
import MapComponent from "./MapComponent";
import { ImageCollection } from "@/constants/images";
import ImageComponent from "./ImageComponent";
import styles from "../../styles/ListofProperty.module.scss";
const ListofProperty = () => {
  return (
    <div className={styles.wrapper}>
      <ImageComponent Images={ImageCollection} />

      <MapComponent />
    </div>
  );
};

export default ListofProperty;
