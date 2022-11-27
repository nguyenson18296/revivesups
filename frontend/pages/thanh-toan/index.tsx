import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

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
      <NextSeo
        title="Revivesup - Thanh toán"
        description="Revivesup - Thanh toán"
        openGraph={{
          url: "https://cellfit.vn/thanh-toan",
          title: "Revivesup - Thanh toán",
          description: "Revivesup - Thanh toán",
          images: [
            {
              url: "../../public/header-logo.png",
              width: 300,
              height: 300,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            }
          ]
        }}
      />
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
