import React from "react";

import styles from "./Banner.module.scss";

export const Banner: React.FC = () => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerImg}>
                <div className={styles.bannerContent}>
                    <div className={styles.bannerContentInner}>
                        <h4 className={styles.heading}>
                            Introducing Immune Defense
                        </h4>
                        <div className={styles.subHeading}>
                            <p>
                                Use code IMMUNE50 to buy one get one 50% off!
                            </p>
                        </div>
                        <div className={styles.buttonWrapper}>
                            <a className={styles.button}>
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}