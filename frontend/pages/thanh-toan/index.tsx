import React from "react";

import { CheckoutForm } from "../../components/CheckoutForm/CheckoutForm";
import { CartReview } from "../../components/CheckoutForm/CartReview";

import styles from "./Checkout.module.scss";

const Checkout: React.FC = () => {
    return (
        <div className={styles.wrap}>
            <main className={styles.main}>
                <CheckoutForm />
                <CartReview />
            </main>
        </div>
    )
}

export default Checkout;
