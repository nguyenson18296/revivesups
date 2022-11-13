import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { CheckoutForm } from "../../components/CheckoutForm/CheckoutForm";
import { CartReview } from "../../components/CheckoutForm/CartReview";

import checkIcon from "../../assets/checked.png";
import styles from "./Checkout.module.scss";

const SuccessModal: React.FC = () => {
  return (
    <div className={styles.successCard}>
      <div className={styles.cardContent}>
        <Image src={checkIcon} alt="checked" />
        <h2>
          Đặt hàng thành công!
        </h2>
        <p>
          Chúng tôi sẽ liên hệ bạn để xác nhận.
        </p>
        <Link href="/">
            <a className={styles.link}>
              Quay về trang chủ
            </a>
        </Link>
      </div>
    </div>
  )
}

const Checkout: React.FC = () => {
  const [checkoutSuccess, setCheckoutSuccess] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Thanh toán</title>
      </Head>
      <div className={styles.wrap}>
        <main className={styles.main}>
          {checkoutSuccess ? (
            <SuccessModal />
          ) : (
            <>
              <CheckoutForm setCheckoutSuccess={setCheckoutSuccess} />
              <CartReview />
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Checkout;
