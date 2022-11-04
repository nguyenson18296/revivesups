/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";

import { formatCurrency } from "../../utils/utils";
import styles from "./CartReview.module.scss";

export const CartReview: React.FC = () => {
  const [allItems, setallItems] = useState<any[]>([]);

    const { items } = useCart();

    useEffect(() => {
      setallItems(JSON.parse(JSON.stringify(items)));
    }, [items]);

  return (
    <div className={styles.cartPreviewWrapper}>
      <div className={styles.cartItemsList}>
        <div className={styles.orderSummarySection}>
          <div className={styles.orderSummaryContent}>
            <div className={styles.productTable}>
                {allItems.map((item) => (
                    <div className={styles.product} key={item.id}>
                    <div className={styles.productContent}>
                      <div className={styles.productImage}>
                        <div className={styles.productThumbnail}>
                          <div className={styles.productThumbnailWrapper}>
                            <img src={`http://localhost:1337${item.thumbnail}`} alt="product" />
                          </div>
                          <span className={styles.productQuantity}>
                            {item.quantity}
                          </span>
                        </div>
                      </div>
                      <div className={styles.productName}>
                            {item.name}
                      </div>
                    </div>
                    <div className={styles.productPrice}>
                      {formatCurrency(item.price * item.quantity)}
                    </div>
                  </div> 
                ))}
            </div>
            <div className={styles.orderSummarySection}>
                <div className={styles.totalLine}>
                    <div className={styles.totalLineName}>
                      Tổng cộng
                    </div>
                    <div className={styles.totalLineMoney}>
                      {formatCurrency(allItems.reduce((prev, curr) => prev + (curr.price * curr?.quantity), 0))}
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
