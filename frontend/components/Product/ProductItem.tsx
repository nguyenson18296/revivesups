import React, { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";

import { formatCurrency } from "../../utils/utils";
import { IProductItemProps } from "../../constants/global";
import styles from "./ProductItem.module.scss";

interface IProductItem extends IProductItemProps {
  canAddToCart: boolean;
}

export const ProductItem: React.FC<IProductItem> = ({
  id,
  name,
  description,
  pricing,
  url,
  thumbnail,
  canAddToCart
}) => {
  const { addItem } = useCart();

  const onAddItemToCart = useCallback((data: any) => {
    toast.success("Thêm sản phẩm vào giỏ hàng thành công!", {
      theme: "colored"
    });
    addItem(data, 1)
  }, [addItem]);

  console.log("thumbnail", thumbnail);

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
      {canAddToCart && (
        <input
          onClick={() => onAddItemToCart({
            id,
            thumbnail,
            price: +pricing,
            url,
            name
          })}
          type="submit"
          name="add"
          value="Add to cart"
          className="button-primay"
        />
      )}
    </div>
  );
};
