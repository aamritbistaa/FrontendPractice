import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "../../styles/Banner.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  const bannerData = [
    {
      url: "https://www.converse.com/on/demandware.static/-/Library-Sites-ConverseEU01SharedLibrary/default/dwdfb3ae42/firstspirit/converse-uk/media/homepage_1/2023_holiday/D-Converse-11-20-Homepage-p2-Launch-Lineup-HO23.jpg",
      alt: "",
    },
    {
      url: "https://i.pinimg.com/originals/a9/45/c6/a945c6580752e972ebbe2e801bd0f543.jpg",
      alt: "",
    },
  ];
  return (
    <div className={style.wrapper}>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container">
        {bannerData.map((data, index) => (
          <img src={data.url} alt="" srcset="" key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
