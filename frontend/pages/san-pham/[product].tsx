import React from "react";
import Image from "next/image";
import cx from "classnames";
import { useCart } from "react-use-cart";

import { DailyEssentials } from "../../components/Homepage/DailyEssentials/DailyEssentials";

import productImage from "../../assets/product-image-detail.png";
import star from "../../assets/pointed-star.png";
import halfStar from "../../assets/half-pointed-star.png";
import checkMark from "../../assets/check-mark.png";

import styles from "./ProductDetail.module.scss";

const ProductDetail: React.FC = () => {
  const { addItem } = useCart();

  const fakeProduct = {
    id: `id${Math.random().toString(16).slice(2)}`,
    name: "K2 & D3 Bundle",
    url: "http://localhost",
    price: 2000000,
    quantity: 1,
    thumbnail: productImage,
  };

  return (
    <>
      <section>
        <div className={styles.product}>
          <div className={styles.productTop}>
            <div className={styles.productMediaContainer}>
              <div className={styles.productMediaItem}>
                <Image
                  src={productImage}
                  alt="product-detail"
                  className={styles.productImage}
                />
              </div>
            </div>
            <div className={styles.productDetail}>
              <div className={styles.productMeta}>
                <h1 className={cx(styles.productName, "ff-heading")}>
                  Immune Defense
                </h1>
                <div className={styles.productBlockReviews}>
                  <div className={styles.rating}>
                    <span className={styles.star}>
                      <Image src={star} alt="star" width={12} height={12} />
                    </span>
                    <span className={styles.star}>
                      <Image src={star} alt="star" width={12} height={12} />
                    </span>
                    <span className={styles.star}>
                      <Image src={star} alt="star" width={12} height={12} />
                    </span>
                    <span className={styles.star}>
                      <Image src={star} alt="star" width={12} height={12} />
                    </span>
                    <span className={styles.star}>
                      <Image src={halfStar} alt="star" width={12} height={12} />
                    </span>
                    <span className={styles.reviewSection}>đánh giá</span>
                  </div>
                </div>
                <div className={styles.productBlock}>
                  <ul className={styles.productChecks}>
                    <li className={styles.check}>
                      <Image
                        src={checkMark}
                        alt="star"
                        width={12}
                        height={12}
                      />
                      <span className={styles.checkBenefits}>
                        Supports Immune Health
                      </span>
                    </li>
                    <li className={styles.check}>
                      <Image
                        src={checkMark}
                        alt="star"
                        width={12}
                        height={12}
                      />
                      <span className={styles.checkBenefits}>
                        Promote Respiratory Health
                      </span>
                    </li>
                    <li className={styles.check}>
                      <Image
                        src={checkMark}
                        alt="star"
                        width={12}
                        height={12}
                      />
                      <span className={styles.checkBenefits}>
                        Promote Healthy Antioxidant Activity
                      </span>
                    </li>
                  </ul>
                </div>
                <div className={styles.productFormControlsGroup}>
                  <button
                    className={styles.btnSecondary}
                    onClick={() => addItem(fakeProduct, 1)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DailyEssentials heading="Các sản phẩm khác" />
    </>
  );
};

export default ProductDetail;
