/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import cx from "classnames";
import { useCart } from "react-use-cart";
import get from "lodash/get";

import { DailyEssentials } from "../../components/Homepage/DailyEssentials/DailyEssentials";
import { API_ENDPOINT_URL } from "../../constants/global";
import { formatCurrency } from "../../utils/utils";

import productImage from "../../assets/product-image-detail.png";
import star from "../../assets/pointed-star.png";
import halfStar from "../../assets/half-pointed-star.png";
import checkMark from "../../assets/check-mark.png";

import styles from "./ProductDetail.module.scss";

interface IProductDetail {
  product: any;
}

const ProductDetail: React.FC<IProductDetail> = ({ product }) => {
  const { addItem } = useCart();

  console.log("product", product);

  return (
    <>
      <section>
        <div className={styles.product}>
          <div className={styles.productTop}>
            <div className={styles.productMediaContainer}>
              <div className={styles.productMediaItem}>
                <img
                  src={`http://localhost:1337` + get(product, "data.attributes.thumbnail.data[0].attributes.url", "")}
                  // src="http://localhost:1337/uploads/products_item_91e890ea03.png"
                  alt="product-detail"
                  className={styles.productImage}
                  width={640}
                  height={640}
                />
              </div>
            </div>
            <div className={styles.productDetail}>
              <div className={styles.productMeta}>
                <h1 className={cx(styles.productName, "ff-heading")}>
                  {get(product, "data.attributes.name", "")}
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
                    onClick={() => addItem({
                      id: get(product, "data.id", ""),
                      price: get(product, "data.attributes.price", 0),
                      thumbnail: get(product, "data.attributes.thumbnail.data[0].attributes.url", ""),
                      name: get(product, "data.attributes.name", "")
                    }, 1)}
                  >
                    Thêm vào giỏ hàng&nbsp;&nbsp;-&nbsp;&nbsp;<span>{formatCurrency(get(product, "data.attributes.price", ""))}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div dangerouslySetInnerHTML={{
          __html: get(product, "data.attributes.description", "")
        }}>

        </div>
      </section>
      <DailyEssentials heading="Các sản phẩm khác" />
    </>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`${API_ENDPOINT_URL}/products?populate=thumbnail`);
  const products = await res.json();

  const paths = (products?.data || []).map((product: any) => ({
    params: { id: product?.id?.toString() },
  }))

  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: any}) {
  const res = await fetch(`${API_ENDPOINT_URL}/products/${params.id}?populate=thumbnail`)
  const product = await res.json();

  return { props: { product } };
}

export default ProductDetail;
