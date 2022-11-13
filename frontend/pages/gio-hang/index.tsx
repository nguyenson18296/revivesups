/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Head from "next/head";
import Link from "next/link";
import cx from "classnames";
import { Item, useCart } from "react-use-cart";

import { formatCurrency } from "../../utils/utils";

import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";
import styles from "./CartPage.module.scss";

interface ICartItemProps {
  thumbnail: StaticImageData;
  name: string;
  url: string;
  price: number;
  id: string;
  quantity: number;
}

const CartItem: React.FC<ICartItemProps> = ({
  thumbnail,
  name,
  url,
  price,
  quantity,
  id,
}) => {
  const [quantityState, setQuantityState] = useState<number>(0);
  const { updateItemQuantity } = useCart();

  useEffect(() => {
    setQuantityState(quantity);
  }, [quantity]);

  const onChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setQuantityState(+value);
  }, []);

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImageWrapper}>
        <div className={styles.imageWrapper}>
          <img
            src={`http://localhost:1337${thumbnail}`}
            alt={name}
            width={120}
            height={120}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.cartItemMain}>
        <div className={styles.cartItemDetails}>
          <a href={url}>
            <div className={styles.productName}>{name}</div>
          </a>
          <div className={styles.cartItemPrice}>{formatCurrency(price)}</div>
        </div>
        <div className={styles.cartItemQuantity}>
          <div className={styles.cartItemQuantitySelector}>
            <button
              className={cx(styles.cartItemButton, styles.minusButton)}
              onClick={() => updateItemQuantity(id, quantityState - 1)}
            >
              <span className={styles.icon}>
                <Image src={minus} alt="minus" width={24} height={24} />
              </span>
            </button>
            <input
              className={styles.input}
              type="number"
              defaultValue={quantityState}
              value={quantityState}
              onChange={onChange}
              readOnly
            />
            <button
              className={cx(styles.cartItemButton, styles.plusButton)}
              onClick={() => updateItemQuantity(id, quantityState + 1)}
            >
              <span className={styles.icon}>
                <Image src={plus} alt="plus" width={24} height={24} />
              </span>
            </button>
          </div>
        </div>
        <div className={styles.cartItemTotal}>
          {formatCurrency(price * quantity)}
        </div>
      </div>
    </div>
  );
};

const CartPage: React.FC = () => {
  const [allItems, setallItems] = useState<Item[]>([]);
  const { items } = useCart();

  useEffect(() => {
    setallItems(JSON.parse(JSON.stringify(items)));
  }, [items]);

  const renderCartItems = () => {
    if (allItems.length > 0) {
      return (
        <div className={styles.cartForm}>
            <div className={styles.cartFormHeader}>
              <div className={styles.headerProduct}>
                Sản phẩm
              </div>
              <div className={styles.headerQuantity}>
                Số lượng
              </div>
              <div className={styles.headerTotal}>
                Số tiền
              </div>
            </div>
              {(allItems || []).map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  url={item.url}
                  price={item.price}
                  thumbnail={item.thumbnail}
                  quantity={item.quantity || 0}
                />
              ))}
              <div className={styles.cartFoorter}>
                <div className={styles.cartFooterLeft}>

                </div>
                <div className={styles.cartFooterRight}>
                    <p className={cx("ff-header", styles.totalNumber)}>
                      {formatCurrency(allItems.reduce((prev, curr) => prev + (curr.price * (curr?.quantity || 0)), 0))}
                    </p>
                    <div className={styles.footerAction}>
                      <button className={styles.submit}>
                        <Link href="/thanh-toan">
                          Thanh toán
                        </Link>
                      </button>
                    </div>
                </div>
              </div>
          </div>
      )
    }
    return (
      <div className={styles.cartEmpty}>
        <p>
          Giỏ hàng hiện tại của bạn đang trống.
        </p>
        <p>
          <Link href="/danh-muc/1">
              <a className={styles.link}>
                Tiếp tục mua hàng
              </a>
          </Link>
        </p>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Giỏ hàng</title>
      </Head>
      <section>
      <div className={styles.cartPage}>
        <div className={styles.cartContainer}>
          <header className={cx(styles.cartHeader, "ff-heading")}>
            Giỏ hàng của bạn
          </header>
          {renderCartItems()}
        </div>
      </div>
    </section>
    </>
  );
};

export default CartPage;
