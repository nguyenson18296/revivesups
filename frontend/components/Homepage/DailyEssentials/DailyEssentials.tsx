import React, { useCallback, useState, useEffect } from "react";
import Slider from "react-slick";
import get from "lodash/get";

import { ProductItem } from "../../Product/ProductItem";
import { IProductItemProps } from "../../../constants/global";
import { SliderButton } from "../../SliderButton/SliderButton";
import fromApi from "../../../services/api/api";

import product from "../../../assets/product.png";
import styles from "./DailyEssentials.module.scss";

interface IProducSlider {
  heading: string;
}

const mockProducts: IProductItemProps[] = [
  {
    id: "1",
    name: "Immune Defense 1",
    description: "Ultimate Immune Support ",
    pricing: "$39.99",
    url: "",
    thumbnail: product,
  },
  {
    id: "2",
    name: "Immune Defense 2",
    description: "Ultimate Immune Support ",
    pricing: "$39.99",
    url: "",
    thumbnail: product,
  },
  {
    id: "3",
    name: "Immune Defense 3",
    description: "Ultimate Immune Support ",
    pricing: "$39.99",
    url: "",
    thumbnail: product,
  },
  {
    id: "5",
    name: "Immune Defense 4",
    description: "Ultimate Immune Support ",
    pricing: "$39.99",
    url: "",
    thumbnail: product,
  },
];

const settings = {
  infinite: true,
  swipe: true,
  draggable: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SliderButton />,
  prevArrow: <SliderButton left={true} />,
};

const SliderProducts: React.FC = () => {
  // const [isHovering, setIsHovering] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await fromApi.getLatestProducts();
      const formatProducts = response?.data.map((item: any) => ({
        id: item?.id,
        name: get(item, "attributes.name", ""),
        pricing: get(item, "attributes.price", ""),
        thumbnail: get(item, "attributes.thumbnail.data[0].attributes.url", ""),
        url: `san-pham/${item?.id}`,
      }));
      setProducts(formatProducts);
    } catch (e) {
      console.error("error", e);
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  // const onMouseEnter = useCallback(() => {
  //   setIsHovering(true);
  // }, []);

  // const onMouseLeave = useCallback(() => {
  //   setIsHovering(false);
  // }, []);

  console.log("products", products);

  console.log("products", products);

  return (
    <div
      className="slider-wrapper"
      // onMouseEnter={onMouseEnter}
      // onMouseLeave={onMouseLeave}
    >
      <Slider {...settings}>
        {products.map((item) => (
          <ProductItem key={item.id} {...item} />
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
