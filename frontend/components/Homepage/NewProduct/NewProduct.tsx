/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import cx from "classnames";
import get from "lodash/get";

import { DOMAIN_URL } from "../../../constants/global";

import styles from "./NewProduct.module.scss";

interface INewProduct {
  new_product: any;
  productLink: string;
  new_product_sub_header: string;
}

export const NewProduct: React.FC<INewProduct> = ({
  new_product,
  productLink,
  new_product_sub_header
}) => {

  return (
    <section className="section">
      <div className={styles.innerContent}>
        <div className={styles.leftContent}>
          <div className={styles.imageWithTextContainer}>
            <h2 className={cx(styles.textHeading, "ff-heading")}>
              Sản phẩm mới
            </h2>
            <div className={styles.textSubheading}>
              <p>
                {new_product_sub_header}
              </p>
            </div>
            <Link href={`/san-pham/${productLink}`}>
              <a className="button">
                Mua hàng
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.imagePrimary}>
            <img
              className={cx(styles.image, styles.firstImage)}
              src={DOMAIN_URL + get(new_product, "data[0].attributes.url", "")}
              alt="image-primary"
            />
          </div>
          <div className={styles.imageSecondary}>
            <img
              className={cx(styles.image, styles.secondImage)}
              src={DOMAIN_URL + get(new_product, "data[1].attributes.url", "")}
              alt="image-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
