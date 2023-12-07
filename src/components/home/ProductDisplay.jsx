import React from "react";
import style from "../../styles/ProductDisplay.module.scss";
import ProductDisplayCHILD from "./ProductDisplayCHILD";
const ProductDisplay = () => {
  const products = [
    {
      title: "Jordan Airforce1",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 1000 off on first purchase",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png",
    },
    {
      title: "Nike Pegasus Shield",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 3000 off for a limited time",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a8864f68-2838-4f4b-bd37-ce34eed012a5/pegasus-shield-mens-weatherized-road-running-shoes-4rL2wd.png",
    },
    {
      title: "Nike Winflo 8 Shield",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "use code CYBER for an extra 25% off select styles.",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/428d7e99-21e3-4ac1-bad1-fed25dbef461/wio-8-shield-mens-weatherized-road-running-shoes-qxXXKS.png",
    },
    {
      title: "Nike Pegasus Trail 4 GORE-TEX",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "use code CYBER for an extra 25% off select styles.",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/848ac1d6-58a6-4f3b-a867-b2f7e8aebbfc/pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-qdcSR6.png",
    },
    {
      title: "Nike ACG Mountain Fly 2 Low",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 1000 off on first purchase",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6c6d0bc2-3733-45a1-933f-1442e61ed787/acg-mountain-fly-2-low-mens-shoes-kl94gN.png",
    },
    {
      title: "Nike G.T. Hustle 2 GTE",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "",
      url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7f25e49a-f494-406f-b7d8-8f4a213a3ef4/gt-hustle-2-gte-basketball-shoes-8FSgBX.png",
    },
    {
      title: "Giannis Immortality 2",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9f7ea19-d7de-4aac-8392-64d675f200f2/giannis-immortality-2-basketball-shoes-X7xj7b.png",
    },
    {
      title: "Jordan Airforce1",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 1000 off on first purchase",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png",
    },
    {
      title: "Nike Pegasus Shield",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 3000 off for a limited time",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a8864f68-2838-4f4b-bd37-ce34eed012a5/pegasus-shield-mens-weatherized-road-running-shoes-4rL2wd.png",
    },
    {
      title: "Nike Winflo 8 Shield",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "use code CYBER for an extra 25% off select styles.",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/428d7e99-21e3-4ac1-bad1-fed25dbef461/wio-8-shield-mens-weatherized-road-running-shoes-qxXXKS.png",
    },
    {
      title: "Nike Pegasus Trail 4 GORE-TEX",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "use code CYBER for an extra 25% off select styles.",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/848ac1d6-58a6-4f3b-a867-b2f7e8aebbfc/pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-qdcSR6.png",
    },
    {
      title: "Nike ACG Mountain Fly 2 Low",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 1000 off on first purchase",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6c6d0bc2-3733-45a1-933f-1442e61ed787/acg-mountain-fly-2-low-mens-shoes-kl94gN.png",
    },
    {
      title: "Nike G.T. Hustle 2 GTE",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "",
      url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7f25e49a-f494-406f-b7d8-8f4a213a3ef4/gt-hustle-2-gte-basketball-shoes-8FSgBX.png",
    },
    {
      title: "Giannis Immortality 2",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9f7ea19-d7de-4aac-8392-64d675f200f2/giannis-immortality-2-basketball-shoes-X7xj7b.png",
    },
    {
      title: "Jordan Airforce1",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 1000 off on first purchase",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png",
    },
    {
      title: "Nike Pegasus Shield",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 3000 off for a limited time",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a8864f68-2838-4f4b-bd37-ce34eed012a5/pegasus-shield-mens-weatherized-road-running-shoes-4rL2wd.png",
    },
    {
      title: "Nike Winflo 8 Shield",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "use code CYBER for an extra 25% off select styles.",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/428d7e99-21e3-4ac1-bad1-fed25dbef461/wio-8-shield-mens-weatherized-road-running-shoes-qxXXKS.png",
    },
    {
      title: "Nike Pegasus Trail 4 GORE-TEX",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "use code CYBER for an extra 25% off select styles.",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/848ac1d6-58a6-4f3b-a867-b2f7e8aebbfc/pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-qdcSR6.png",
    },
    {
      title: "Nike ACG Mountain Fly 2 Low",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 1000 off on first purchase",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6c6d0bc2-3733-45a1-933f-1442e61ed787/acg-mountain-fly-2-low-mens-shoes-kl94gN.png",
    },
    {
      title: "Nike G.T. Hustle 2 GTE",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "",
      url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7f25e49a-f494-406f-b7d8-8f4a213a3ef4/gt-hustle-2-gte-basketball-shoes-8FSgBX.png",
    },
    {
      title: "Giannis Immortality 2",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9f7ea19-d7de-4aac-8392-64d675f200f2/giannis-immortality-2-basketball-shoes-X7xj7b.png",
    },
    {
      title: "Jordan Airforce1",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 1000 off on first purchase",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png",
    },
    {
      title: "Nike Pegasus Shield",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 3000 off for a limited time",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a8864f68-2838-4f4b-bd37-ce34eed012a5/pegasus-shield-mens-weatherized-road-running-shoes-4rL2wd.png",
    },
    {
      title: "Nike Winflo 8 Shield",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "use code CYBER for an extra 25% off select styles.",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/428d7e99-21e3-4ac1-bad1-fed25dbef461/wio-8-shield-mens-weatherized-road-running-shoes-qxXXKS.png",
    },
    {
      title: "Nike Pegasus Trail 4 GORE-TEX",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "use code CYBER for an extra 25% off select styles.",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/848ac1d6-58a6-4f3b-a867-b2f7e8aebbfc/pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-qdcSR6.png",
    },
    {
      title: "Nike ACG Mountain Fly 2 Low",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 1000 off on first purchase",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6c6d0bc2-3733-45a1-933f-1442e61ed787/acg-mountain-fly-2-low-mens-shoes-kl94gN.png",
    },
    {
      title: "Nike G.T. Hustle 2 GTE",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "",
      url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7f25e49a-f494-406f-b7d8-8f4a213a3ef4/gt-hustle-2-gte-basketball-shoes-8FSgBX.png",
    },
    {
      title: "Giannis Immortality 2",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Cashback up to Rs. 300",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9f7ea19-d7de-4aac-8392-64d675f200f2/giannis-immortality-2-basketball-shoes-X7xj7b.png",
    },
    {
      title: "Jordan Airforce1",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 1000 off on first purchase",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png",
    },
    {
      title: "Nike Pegasus Shield",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 3000 off for a limited time",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a8864f68-2838-4f4b-bd37-ce34eed012a5/pegasus-shield-mens-weatherized-road-running-shoes-4rL2wd.png",
    },
    {
      title: "Nike Winflo 8 Shield",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "use code CYBER for an extra 25% off select styles.",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/428d7e99-21e3-4ac1-bad1-fed25dbef461/wio-8-shield-mens-weatherized-road-running-shoes-qxXXKS.png",
    },
    {
      title: "Nike Pegasus Trail 4 GORE-TEX",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "use code CYBER for an extra 25% off select styles.",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/848ac1d6-58a6-4f3b-a867-b2f7e8aebbfc/pegasus-trail-4-gore-tex-mens-waterproof-trail-running-shoes-qdcSR6.png",
    },
    {
      title: "Nike ACG Mountain Fly 2 Low",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "Up to Rs. 1000 off on first purchase",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6c6d0bc2-3733-45a1-933f-1442e61ed787/acg-mountain-fly-2-low-mens-shoes-kl94gN.png",
    },
    {
      title: "Nike G.T. Hustle 2 GTE",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "-30%",
      },
      tagline: "",
      url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7f25e49a-f494-406f-b7d8-8f4a213a3ef4/gt-hustle-2-gte-basketball-shoes-8FSgBX.png",
    },
    {
      title: "Giannis Immortality 2 with a high quality nike shoe",
      price: {
        discount: "5000",
        mrp: "8000",
        discountPercent: "",
      },

      tagline: "",
      url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9f7ea19-d7de-4aac-8392-64d675f200f2/giannis-immortality-2-basketball-shoes-X7xj7b.png",
    },
  ];
  return (
    <div className={style.wrapper}>
      {products.map((item, index) => (
        <ProductDisplayCHILD item={item} key={index} />
      ))}
    </div>
  );
};

export default ProductDisplay;
