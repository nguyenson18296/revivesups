import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./ProductItem.module.scss";

export interface IProductItemProps {
  name: string;
  url: string;
  pricing: string;
  description?: string;
  thumbnail: StaticImageData;
}

export const ProductItem: React.FC<IProductItemProps> = ({
  name,
  description,
  pricing,
  url,
  thumbnail,
}) => {
  return (
    <div className={styles.productItem}>
      <div className={styles.productItemMedia}>
        <Link href={url}>
          <a>
            <Image src={thumbnail} alt={name} className={styles.productImage} />
          </a>
        </Link>
      </div>
      <div className={styles.productItemText}>
        <Link href={url}>
          <a>
            <h4 className={styles.productItemTitle}>{name}</h4>
          </a>
        </Link>
        <span className={styles.productDescription}>{description}</span>
        <br />
        <span className={styles.productPrice}>{pricing}</span>
      </div>
      <input
        type="submit"
        name="add"
        value="Add to cart"
        className="button-primay "
      />
    </div>
  );
};
