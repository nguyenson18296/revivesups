import React, { useCallback, useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import get from "lodash/get";
import cx from "classnames";

import fromApi from "../../services/api/api";
import { cities } from "../../constants/cities";

import styles from "./CheckoutForm.module.scss";

export const CheckoutForm: React.FC = () => {
  const [address, setAddress] = useState({
    email: "",
    last_name: "",
    first_name: "",
    address: "",
    city: "",
    address_detail: "",
    phone_number: "",
  });
  const [allItems, setallItems] = useState<any[]>([]);

  const { items } = useCart();

  useEffect(() => {
    setallItems(JSON.parse(JSON.stringify(items)));
  }, [items]);

  const handleChange = useCallback(
    (e: React.ChangeEvent) => {
      const { name, value } = e.currentTarget as HTMLInputElement;

      setAddress({
        ...address,
        [name]: value,
      });
    },
    [address]
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const submitBody = {
      data: {
        ...address,
      },
    };
    try {
      const response = await fromApi.createOrder(submitBody);
      if (response) {
        await Promise.all(
          allItems.map((item) => {
            const data = {
              order: get(response, "data.id", ""),
              quantity: item.quantity,
              product: item.id,
            };
            return fromApi.createOrderLineItem({
              data,
            });
          })
        )
          .then(() => {
            toast.success(
              "Đặt hàng thành công, chúng tôi sẽ liên hệ bạn để xác nhận",
              {
                theme: "colored",
              }
            );
          })
          .catch(() => {
            toast.error("Đặt hàng thất bại, vui lòng thử lại", {
              theme: "colored",
            });
          });
      }
    } catch (e) {}
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.stepSection}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Thông tin liên hệ</h2>
          </div>
          <div>
            <div className="fieldset">
              <div className={styles.field}>
                <input
                  placeholder="Email"
                  className={styles.input}
                  name="email"
                  required
                  onChange={handleChange}
                  value={address["email"]}
                />
              </div>
            </div>
            <div className="fieldset">
              <div className={styles.field}>
                <input
                  placeholder="Họ"
                  className={styles.input}
                  name="last_name"
                  required
                  onChange={handleChange}
                  value={address["last_name"]}
                />
              </div>
            </div>
            <div className="fieldset">
              <div className={styles.field}>
                <input
                  placeholder="Tên"
                  className={styles.input}
                  name="first_name"
                  required
                  onChange={handleChange}
                  value={address["first_name"]}
                />
              </div>
            </div>
            <div className="fieldset">
              <div className={styles.field}>
                <input
                  placeholder="Địa chỉ"
                  className={styles.input}
                  required
                  name="address"
                  onChange={handleChange}
                  value={address["address"]}
                />
              </div>
            </div>
            <div className="fieldset">
              <div className={styles.field}>
                {/* <input
                  placeholder="Thành phố"
                  className={styles.input}
                  required
                  name="city"
                  type="select"
                  onChange={handleChange}
                  value={address["city"]}
                /> */}
                <select
                  className={cx(styles.input, styles.select)}
                  name="city"
                  onChange={handleChange}
                  value={address["city"]}
                >
                  {cities.map((item) => (
                    <option key={item.city}>{item.city}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="fieldset">
              <div className={styles.field}>
                <input
                  placeholder="Toà nhà, chung cư (tuỳ chọn)"
                  className={styles.input}
                  name="address_detail"
                  onChange={handleChange}
                  value={address["address_detail"]}
                />
              </div>
            </div>
            <div className="fieldset">
              <div className={styles.field}>
                <input
                  placeholder="Số điện thoại"
                  className={styles.input}
                  type="number"
                  required
                  name="phone_number"
                  onChange={handleChange}
                  value={address["phone_number"]}
                />
              </div>
            </div>
          </div>
          <div className={styles.stepFooter}>
            <div className={styles.stepFooterWrapper}>
              <Link className={styles.returnToCart} href="/gio-hang">
                Quay lại giỏ hàng
              </Link>
              <button className={styles.continueButton}>Tiếp tục</button>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
};
