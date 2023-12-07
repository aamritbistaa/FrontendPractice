import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styles from "../../styles/ImageComponent.module.scss";

const ImageComponent = ({ Images }) => {
  const [image, setImage] = useState(Images[0]);

  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullScreen = () => {
    setFullScreen((e) => !e);
  };
  const handleRightArrow = () => {
    let i = Images.findIndex((item) => item == image);

    if (i == Images.length - 1) {
      i = 0;
    } else {
      i++;
    }
    setImage(Images[i]);
  };
  const handleLeftArrow = () => {
    let i = Images.findIndex((item) => item == image);

    if (i == 0) {
      i = Images.length - 1;
    } else {
      i--;
    }
    setImage(Images[i]);
  };
  const handleClickFunction = (e) => {
    setImage(Images[e]);
  };

  return (
    <>
      {fullScreen ? (
        <>
          <div className={styles.popup}>
            <img src={image} alt="popup image" />

            <CloseIcon onClick={toggleFullScreen} />
            <div className={styles.popup_buttoncontainer}>
              <button onClick={() => handleLeftArrow()}>
                <ArrowLeftIcon />
              </button>
              <button onClick={() => handleRightArrow()}>
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.wrapper_showcase}>
            {<img src={image} onClick={toggleFullScreen} alt="display image" />}
          </div>

          <div className={styles.wrapper_allitem}>
            {Images.map(
              (item, index) =>
                item !== image &&
                index < 3 && (
                  <div
                    className={styles.wrapper_allitem_item}
                    key={index}
                    style={{}}>
                    <img
                      src={item}
                      onClick={() => handleClickFunction(index)}
                      alt="preview image"
                    />
                  </div>
                )
            )}
            {Images.length > 3 && (
              <div
                className={styles.wrapper_allitem_item}
                style={{ cursor: "auto" }}>
                {Images.length - 4} more items
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageComponent;
