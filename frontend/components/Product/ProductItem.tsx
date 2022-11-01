import React from "react";
import Image from "next/image";
import Link from "next/link";

import { formatCurrency } from "../../utils/utils";
import { IProductItemProps } from "../../constants/global";
import styles from "./ProductItem.module.scss";

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
        <Link href={`/${url}`}>
          <a>
            <Image
              src={thumbnail} 
              alt={name} 
              className={styles.productImage} 
              width={390}
              height={390}
            />
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
        <span className={styles.productPrice}>{formatCurrency(+pricing)}</span>
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
