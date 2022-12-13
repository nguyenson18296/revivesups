import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import cx from "classnames";

import { DOMAIN_URL } from "../../../constants/global";

import styles from "./Banner.module.scss";

interface IBannerProps {
  banner_url: string;
  bannerData: any; 
  marquee: any;
}

const makeRepeated = (arr: any, repeats: number) =>
  [].concat(...Array.from({ length: repeats }, () => arr));

export const Banner: React.FC<IBannerProps> = ({
  banner_url, bannerData, marquee
}) => {

  return (
    <>
      <section className={styles.bannerSection}>
        <div className={styles.bannerContainer}>
          <div
            className={cx(styles.bannerImg, styles.bannerTransition)}
            style={{
              backgroundImage: `url(${DOMAIN_URL + banner_url})`
            }}
          >
            <div className={styles.bannerContent}>
              <div className={styles.bannerContentInner}>
                <h4 className={styles.heading} style={{ color: bannerData?.data?.text_color}}>{bannerData?.data?.heading}</h4>
                <div className={styles.subHeading}>
                  <p style={{ color: bannerData?.data?.text_color}}>{bannerData?.data?.sub_header}</p>
                </div>
                <div className={styles.buttonWrapper}>
                  <Link className={styles.button} href={bannerData?.data?.link_shopping || ""}>
                    <a className={styles.button}>{bannerData?.data?.button_text}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.marqueeHorizontal}>
        <Marquee gradient={false}>
          {(makeRepeated(marquee, 3)).map((item: string, index: number) => (
            <div key={index} className={styles.marqueeText}>
              {item}
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};
