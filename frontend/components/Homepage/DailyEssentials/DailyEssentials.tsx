import React, { useCallback, useState, useEffect } from "react";
import Slider from "react-slick";
import get from "lodash/get";

import { ProductItem } from "../../Product/ProductItem";
import { SliderButton } from "../../SliderButton/SliderButton";
import fromApi from "../../../services/api/api";

import styles from "./DailyEssentials.module.scss";

interface IProducSlider {
  heading: string;
}

const settings = {
  infinite: true,
  swipe: true,
  draggable: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SliderButton />,
  prevArrow: <SliderButton left={true} />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const SliderProducts: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await fromApi.getLatestProducts();
      console.log("response", response);
      const formatProducts = response?.data.map((item: any) => ({
        id: item?.id,
        name: get(item, "attributes.name", ""),
        pricing: get(item, "attributes.price", ""),
        pricing_discount: get(item, "attributes.price_discount", ""),
        thumbnail: get(item, "attributes.thumbnail.data", ""),
        url: `san-pham/${get(item, "attributes.slug", "")}`,
        sold_out: get(item, "attributes.sold_out", false),
      }));
      setProducts(formatProducts);
    } catch (error: any) {
      throw Error(error);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {products.map((item) => (
          <ProductItem key={item.id} {...item} canAddToCart />
        ))}
      </Slider>
    </div>
  );
};

export const DailyEssentials: React.FC<IProducSlider> = ({ heading }) => {
  return (
    <section className="section">
      <div className="section__inner">
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.featureCollectionContent}>
          <SliderProducts />
        </div>
      </div>
    </section>
  );
};
