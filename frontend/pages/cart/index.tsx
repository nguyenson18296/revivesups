import React, { useCallback, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import cx from "classnames";
import { Item, useCart } from "react-use-cart";

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
          <Image
            src={thumbnail}
            alt={name}
            width={120}
            height={120}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.cartItemMain}>
        <div className={styles.cartItemDetails}>
          <Link href={url}>
            <a className={styles.productName}>{name}</a>
          </Link>
          <div className={styles.cartItemPrice}>{price}</div>
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
      </div>
    </div>
  );
};

const CartPage: React.FC = () => {
  const [allItems, setallItems] = useState<Item[]>([]);
  // const [cartItems, setCartItems] = useState<IProductItemAddToCart[]>([]);
  const { items } = useCart();

  useEffect(() => {
    setallItems(JSON.parse(JSON.stringify(items)));
  }, [items]);

  return (
    <section>
      <div className={styles.cartPage}>
        <div className={styles.cartContainer}>
          <header className={cx(styles.cartHeader, "ff-heading")}>
            Giỏ hàng của bạn
          </header>
          <div className={styles.cartForm}>
            <div className={styles.cartFormHeader}>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
