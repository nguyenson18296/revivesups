import React, { useCallback, useState } from "react";
import Slider from "react-slick";

import {
  ProductItem,
  IProductItemProps,
} from "../../../components/Product/ProductItem";
import { SliderButton } from "../../../components/SliderButton/SliderButton";

import product from "../../../assets/product.png";
import styles from "./DailyEssentials.module.scss";

interface IProducts extends IProductItemProps {
  id: number;
}

const mockProducts: IProducts[] = [
  {
    id: 1,
    name: "Immune Defense 1",
    description: "Ultimate Immune Support ",
    pricing: "$39.99",
    url: "",
    thumbnail: product,
  },
  {
    id: 2,
    name: "Immune Defense 2",
    description: "Ultimate Immune Support ",
    pricing: "$39.99",
    url: "",
    thumbnail: product,
  },
  {
    id: 3,
    name: "Immune Defense 3",
    description: "Ultimate Immune Support ",
    pricing: "$39.99",
    url: "",
    thumbnail: product,
  },
  {
    id: 4,
    name: "Immune Defense 4",
    description: "Ultimate Immune Support ",
    pricing: "$39.99",
    url: "",
    thumbnail: product,
  },
];

const SliderProducts: React.FC = () => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SliderButton isHover={isHovering} />,
    prevArrow: <SliderButton left={true} isHover={isHovering} />,
  };

  const onMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <div
      className="slider-wrapper"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Slider {...settings}>
        {mockProducts.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export const DailyEssentials: React.FC = () => {
  return (
    <section className="section">
      <div className="section__inner">
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>Daily Essentials</h2>
        </div>
        <div className={styles.featureCollectionContent}>
          <SliderProducts />
        </div>
      </div>
    </section>
  );
};
