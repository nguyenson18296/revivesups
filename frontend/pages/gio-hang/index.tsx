/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Head from "next/head";
import Link from "next/link";
import cx from "classnames";
import { Item, useCart } from "react-use-cart";
import { NextSeo } from "next-seo";

import { formatCurrency } from "../../utils/utils";
import { DOMAIN_URL } from "../../constants/global";

import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";
import styles from "./CartPage.module.scss";

interface ICartItemProps {
  thumbnail: StaticImageData;
  name: string;
  url: string;
  price: number;
  price_discount: number;
  id: string;
  quantity: number;
}

const CartItem: React.FC<ICartItemProps> = ({
  thumbnail,
  name,
  url,
  price,
  price_discount,
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
            src={`${DOMAIN_URL}${thumbnail}`}
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
          {price_discount ? (
            <>
              <div
                className={cx(
                  styles.cartItemPrice,
                  styles.cartItemPriceOriginal
                )}
              >
                {formatCurrency(price)}
              </div>
              <div className={styles.cartItemPrice}>
                {formatCurrency(price_discount)}
              </div>
            </>
          ) : (
            <div className={styles.cartItemPrice}>{formatCurrency(price)}</div>
          )}
          {/* <div className={styles.cartItemPrice}>{formatCurrency(price)}</div>
          <div className={styles.cartItemPrice}>{formatCurrency(price_discount)}</div> */}
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
          {formatCurrency((price_discount ? price_discount : price) * quantity)}
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
            <div className={styles.headerProduct}>S???n ph???m</div>
            <div className={styles.headerQuantity}>S??? l?????ng</div>
            <div className={styles.headerTotal}>S??? ti???n</div>
          </div>
          {(allItems || []).map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              url={item.url}
              price={item.price}
              price_discount={item.price_discount}
              thumbnail={item.thumbnail}
              quantity={item.quantity || 0}
            />
          ))}
          <div className={styles.cartFoorter}>
            <div className={styles.cartFooterLeft}></div>
            <div className={styles.cartFooterRight}>
              <p className={cx("ff-header", styles.totalNumber)}>
                {formatCurrency(
                  allItems.reduce(
                    (prev, curr) =>
                      prev +
                      (curr.price_discount
                        ? curr.price_discount
                        : curr.price * (curr?.quantity || 0)),
                    0
                  )
                )}
              </p>
              <div className={styles.footerAction}>
                <button className={styles.submit}>
                  <Link href="/thanh-toan">Thanh to??n</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className={styles.cartEmpty}>
        <p>Gi??? h??ng hi???n t???i c???a b???n ??ang tr???ng.</p>
        <p>
          <Link href="/">
            <a className={styles.link}>Ti???p t???c mua h??ng</a>
          </Link>
        </p>
      </div>
    );
  };

  return (
    <>
      <NextSeo
        title="CellFit - Gi??? h??ng"
        description="CellFit - Gi??? h??ng"
        openGraph={{
          url: "https://cellfit.vn/thanh-toan",
          title: "CellFit - Gi??? h??ng",
          description: "CellFit - Gi??? h??ng",
          images: [
            {
              url: "../../public/header-logo.png",
              width: 300,
              height: 300,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <section>
        <div className={styles.cartPage}>
          <div className={styles.cartContainer}>
            <header className={cx(styles.cartHeader, "ff-heading")}>
              Gi??? h??ng c???a b???n
            </header>
            {renderCartItems()}
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
