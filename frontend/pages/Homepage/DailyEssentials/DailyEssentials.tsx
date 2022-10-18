import React from "react";

import { ProductItem, IProductItemProps } from "../../../components/Product/ProductItem";

import product from "../../../assets/product.png";
import styles from "./DailyEssentials.module.scss";

interface IProducts extends IProductItemProps {
    id: number;
}

const mockProducts: IProducts[] = [
    {
        id: 1,
        name: "Immune Defense",
        description: "Ultimate Immune Support ",
        pricing: "$39.99",
        url: "",
        thumbnail: product
    },
    {
        id: 2,
        name: "Immune Defense",
        description: "Ultimate Immune Support ",
        pricing: "$39.99",
        url: "",
        thumbnail: product
    },
    {
        id: 3,
        name: "Immune Defense",
        description: "Ultimate Immune Support ",
        pricing: "$39.99",
        url: "",
        thumbnail: product
    },
    {
        id: 4,
        name: "Immune Defense",
        description: "Ultimate Immune Support ",
        pricing: "$39.99",
        url: "",
        thumbnail: product
    }
]

export const DailyEssentials: React.FC = () => {
  return (
    <section className="section">
      <div className="section__inner">
        <div className={styles.sectionHeader}>
          <h2 className={styles.heading}>Daily Essentials</h2>
        </div>
        <div className={styles.featureCollectionContent}>
            {mockProducts.map((item) => (
                <div className={styles.featureCollectionSlide} key={item.id}>
                    <ProductItem {...item} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
