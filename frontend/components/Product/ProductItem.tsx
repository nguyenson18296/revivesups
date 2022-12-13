/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useMemo, useState, CSSProperties } from "react";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import cx from "classnames";
import noop from "lodash/noop";
import get from "lodash/get";

import { formatCurrency } from "../../utils/utils";
import { DOMAIN_URL } from "../../constants/global";
import { IProductItemProps } from "../../constants/global";

import styles from "./ProductItem.module.scss";

interface IProductItem extends IProductItemProps {
  canAddToCart?: boolean;
}

export const ProductItem: React.FC<IProductItem> = ({
  id,
  name,
  description,
  pricing,
  pricing_discount,
  url,
  thumbnail,
  canAddToCart,
  sold_out,
}) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const { addItem } = useCart();

  const onAddItemToCart = useCallback(
    (data: any) => {
      toast.success("Thêm sản phẩm vào giỏ hàng thành công!", {
        theme: "colored",
      });
      addItem(data, 1);
    },
    [addItem]
  );

  const onMouseMoveImage = useCallback(() => {
    setIsHovering(true);
  }, []);

  const onMouseLeaveImage = useCallback(() => {
    setIsHovering(false);
  }, []);

  const stylesSecondImage = useMemo((): CSSProperties => {
    if (isHovering) {
      return {
        zIndex: 2,
        opacity: 1,
        // transform: "translate(0%, -50%)"
      }
    }
    return {
      zIndex: 1,
      opacity: 0,
      // transform: "translate(0%, -50%)"
    }
  }, [isHovering]);

  const stylesFirstImage = useMemo((): CSSProperties => {
    if (isHovering) {
      return {
        zIndex: 1,
        opacity: 0,
      }
    }
    return {
      zIndex: 2,
      opacity: 1,
    }
  }, [isHovering]);

  return (
    <div className={styles.productItem}>
      <div className={styles.productItemMedia}>
        <Link href={`/${url}`}>
        <a>
          {get(thumbnail, "[1].attributes.url") ? (
            <>
              <div className={styles.imageOne} style={stylesFirstImage}>
                <img
                  src={`${DOMAIN_URL}${get(thumbnail, "[0].attributes.url")}`}
                  alt={name}
                  className={cx(styles.productImage, "image__img lazyloaded")}
                  onMouseMove={onMouseMoveImage}
                  onMouseLeave={onMouseLeaveImage}
                />
              </div>
                <div className={styles.imageTwo} style={stylesSecondImage}>
                  <img
                  src={`${DOMAIN_URL}${get(thumbnail, "[1].attributes.url")}`}
                  alt={name}
                  className={cx(styles.productImage, "image__img lazyloaded")}
                  onMouseMove={onMouseMoveImage}
                  onMouseLeave={onMouseLeaveImage}
                />
                </div>
            </>
          ) : (
            <div className={styles.imageOne}>
                <img
                  src={`${DOMAIN_URL}${get(thumbnail, "[0].attributes.url")}`}
                  alt={name}
                  className={cx(styles.productImage, "image__img lazyloaded")}
                  onMouseMove={onMouseMoveImage}
                  onMouseLeave={onMouseLeaveImage}
                />
              </div>
          )}
            <div className={styles.productBadges}>
              {sold_out && (
                <div
                  className={cx(styles.productSoldOut, styles.productItemBadge)}
                >
                  Hết hàng
                </div>
              )}
            </div>
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
        {pricing_discount ? (
          <div>
            <span className={styles.productPriceOrignial}>{formatCurrency(+pricing)}</span>
            <span className={styles.productPriceDiscount} style={{ paddingLeft: "5px" }}>{formatCurrency(+pricing_discount)}</span>
          </div>
        ) : (
          <span className={styles.productPriceDiscount}>{formatCurrency(+pricing)}</span>
        )}
      </div>
      {canAddToCart && (
        <input
          onClick={
            sold_out
              ? noop
              : () =>
                  onAddItemToCart({
                    id: id?.toString(),
                    thumbnail,
                    price: +pricing,
                    price_discount: +pricing_discount,
                    url,
                    name,
                  })
          }
          type="submit"
          name="add"
          value={sold_out ? "Hết hàng" : "Thêm vào giỏ hàng"}
          className="button-primay"
        />
      )}
    </div>
  );
};
