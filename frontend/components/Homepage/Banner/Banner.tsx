import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import cx from "classnames";

import styles from "./Banner.module.scss";

export const Banner: React.FC = () => {
  return (
    <>
      <section className={styles.bannerSection}>
        <div className={styles.bannerContainer}>
          <div className={cx(styles.bannerImg, styles.bannerTransition)}>
            <div className={styles.bannerContent}>
              <div className={styles.bannerContentInner}>
                <h4 className={styles.heading}>Introducing Immune Defense</h4>
                <div className={styles.subHeading}>
                  <p>Use code IMMUNE50 to buy one get one 50% off!</p>
                </div>
                <div className={styles.buttonWrapper}>
                  <Link className={styles.button} href="danh-muc/tang-can">
                    <a className={styles.button}>Shop Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.marqueeHorizontal}>
        <Marquee gradient={false}>
          <div className={styles.marqueeText}>Revive Your Health</div>
          <div className={styles.marqueeText}>Experience the Difference</div>
          <div className={styles.marqueeText}>Revive Your Health</div>
          <div className={styles.marqueeText}>Experience the Difference</div>
          <div className={styles.marqueeText}>Revive Your Health</div>
          <div className={styles.marqueeText}>Experience the Difference</div>
          <div className={styles.marqueeText}>Revive Your Health</div>
          <div className={styles.marqueeText}>Experience the Difference</div>
          <div className={styles.marqueeText}>Revive Your Health</div>
          <div className={styles.marqueeText}>Experience the Difference</div>
          <div className={styles.marqueeText}>Revive Your Health</div>
          <div className={styles.marqueeText}>Experience the Difference</div>
          <div className={styles.marqueeText}>Revive Your Health</div>
          <div className={styles.marqueeText}>Experience the Difference</div>
        </Marquee>
      </div>
    </>
  );
};
