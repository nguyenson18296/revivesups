/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import cx from "classnames";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import get from "lodash/get";
import { NextSeo } from "next-seo";

import { DailyEssentials } from "../../components/Homepage/DailyEssentials/DailyEssentials";
import { API_ENDPOINT_URL, DOMAIN_URL } from "../../constants/global";
import { formatCurrency } from "../../utils/utils";

import star from "../../assets/pointed-star.png";
import halfStar from "../../assets/half-pointed-star.png";
import checkMark from "../../assets/check-mark.png";

import styles from "./ProductDetail.module.scss";

interface IProductDetail {
  product: any;
}

const ProductDetail: React.FC<IProductDetail> = ({ product }) => {
  const { addItem } = useCart();
  const [isSoldOut, setIsSoldOut] = useState<boolean>(false);
  const [benefits, setBenefits] = useState<string[]>([]);

  const onAddItemToCart = useCallback((data: any) => {
    toast.success("Thêm sản phẩm vào giỏ hàng thành công!", {
      theme: "colored"
    });
    addItem(data, 1)
  }, [addItem]);

  useEffect(() => {
    setIsSoldOut(get(product, "data.attributes.sold_out", false));
    setBenefits(get(product, "data.attributes.benefit", "").split(/\n/));
  }, [product]);

  return (
    <>
      <NextSeo
         title={`Sản phảm - ${get(product, "data.attributes.name", "")}`}
         openGraph={{
          url: DOMAIN_URL + get(product, "data.attributes.thumbnail.data[0].attributes.url", ""),
          title: get(product, "data.attributes.title", ""),
          description: `Sản phảm - ${get(product, "data.attributes.name", "")}`,
          images: [
            {
              url: get(product, "data.attributes.thumbnail.data.attributes.url", ""),
              width: 300,
              height: 300,
              alt: get(product, "data.attributes.name", ""),
              type: 'image/jpeg',
            }
          ]
        }}
      />
      <section>
        <div className={styles.product}>
          <div className={styles.productTop}>
            <div className={styles.productMediaContainer}>
              <div className={styles.productMediaItem}>
                <img
                  src={DOMAIN_URL + get(product, "data.attributes.thumbnail.data[0].attributes.url", "")}
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
                    {(benefits || []).map((benefit: string, index: number) => (
                       <li className={styles.check} key={index}>
                        <Image
                          src={checkMark}
                          alt="star"
                          width={12}
                          height={12}
                        />
                        <span className={styles.checkBenefits}>
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.productFormControlsGroup}>
                  {isSoldOut ? (
                    <div className={styles.btnSecondary}>
                      Hết hàng
                    </div>
                  ) : (
                    <button
                      className={cx(styles.btnSecondary, styles.btnSubmit)}
                      onClick={() => onAddItemToCart({
                        id: get(product, "data.id", "").toString(),
                        url: `/san-pham/${get(product, "data.id", "")}`,
                        price: get(product, "data.attributes.price", 0),
                        price_discount: get(product, "attributes.price_discount", ""),
                        thumbnail: get(product, "data.attributes.thumbnail.data[0].attributes.url", ""),
                        name: get(product, "data.attributes.name", "")
                      })}
                    >
                      Thêm vào giỏ hàng&nbsp;&nbsp;-&nbsp;&nbsp;
                      {get(product, "data.attributes.price_discount", "") ? (
                        <>
                          <span className={cx(styles.price, styles.originalPrice)}>{formatCurrency(get(product, "data.attributes.price", ""))}</span>
                          <span className={cx(styles.price, styles.discountPrice)}>{formatCurrency(get(product, "data.attributes.price_discount", ""))}</span>
                        </>
                      ) : (
                        <span className={styles.price}>{formatCurrency(get(product, "data.attributes.price", ""))}</span>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.productDescription}>
        <div dangerouslySetInnerHTML={{
          __html: get(product, "data.attributes.description", "")
        }}>

        </div>
      </section>
      <DailyEssentials heading="Các sản phẩm khác" />
    </>
  );
};

// This also gets called at build time
export async function getServerSideProps({ params }: { params: any}) {
  const res = await fetch(`${API_ENDPOINT_URL}/products/${params.slug}`)
  const product = await res.json();

  return { props: { product } };
}

export default ProductDetail;
