import React from "react";
import Image from "next/image";
import cx from "classnames";

import imagePrimary from "../../../assets/new-product.png";
import imageSecondary from "../../../assets/new-product-secondary.png";
import styles from "./NewProduct.module.scss";

export const NewProduct: React.FC = () => {
  return (
    <section className="section">
        <div className={styles.innerContent}>
            <div className={styles.leftContent}>
            <div className={styles.imageWithTextContainer}>
            <h2 className={cx(styles.textHeading, "ff-heading")}>New Products</h2>
            <div className={styles.textSubheading}>
                <p>
                Introducing Immune Defense! Plus Vitamin K2 & D3 are now available
                as individual products!
                </p>
            </div>
            <a className="button">
                Shop the Latest
            </a>
            </div>
        </div>
        <div className={styles.rightContent}>
            <div className={styles.imagePrimary}>
                <Image className={cx(styles.image, styles.firstImage)} src={imagePrimary} alt="image-primary" />
            </div>
            <div className={styles.imageSecondary}>
                <Image className={cx(styles.image, styles.secondImage)} src={imageSecondary} alt="image-secondary" />
            </div>
        </div>
        </div>
    </section>
  );
};
