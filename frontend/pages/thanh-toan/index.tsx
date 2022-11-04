import React from "react";
import Head from "next/head";

import { CheckoutForm } from "../../components/CheckoutForm/CheckoutForm";
import { CartReview } from "../../components/CheckoutForm/CartReview";

import styles from "./Checkout.module.scss";

const Checkout: React.FC = () => {
  return (
    <>
      <Head>
        <title>Thanh toán</title>
      </Head>
      <div className={styles.wrap}>
        <main className={styles.main}>
          <CheckoutForm />
          <CartReview />
        </main>
      </div>
    </>
  );
};

export default Checkout;
