import React from "react";
import Link from "next/link";

import styles from "./CheckoutForm.module.scss";

export const CheckoutForm: React.FC = () => {
    const onSubmit = () => {
        console.log("submit");
    }

  return (
    <form className={styles.form}>
      <div className={styles.stepSection}>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Thông tin liên hệ</h2>
          </div>
          <div>
            <div className="fieldset">
              <div className={styles.field}>
                <input placeholder="Email" className={styles.input} required />
              </div>
            </div>
            <div className="fieldset">
              <div className={styles.field}>
                <input placeholder="Họ tên" className={styles.input} required />
              </div>
            </div>
            <div className="fieldset">
              <div className={styles.field}>
                <input
                  placeholder="Địa chỉ"
                  className={styles.input}
                  required
                />
              </div>
            </div>
            <div className="fieldset">
              <div className={styles.field}>
                <input
                  placeholder="Toà nhà, chung cư (tuỳ chọn)"
                  className={styles.input}
                  required
                />
              </div>
            </div>
            <div className="fieldset">
              <div className={styles.field}>
                <input
                  placeholder="Thành phố"
                  className={styles.input}
                  required
                />
              </div>
            </div>
            <div className="fieldset">
              <div className={styles.field}>
                <input
                  placeholder="Số điện thoại"
                  className={styles.input}
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.stepFooter}>
            <div className={styles.stepFooterWrapper}>
              <Link className={styles.returnToCart} href="/gio-hang">
                Quay lại giỏ hàng
              </Link>
              <button
                className={styles.continueButton}
                onSubmit={onSubmit}
            >Tiếp tục</button>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
};
