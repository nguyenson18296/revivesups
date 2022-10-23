import React from "react";
import Image from "next/image";
import cx from "classnames";

import ourMission from "../../../assets/our-mission.png";
import styles from "./OurMission.module.scss";

export const OurMission: React.FC = () => {
  return (
    <section className="section">
      <div className={styles.innerContent}>
        <div className={styles.leftContent}>
          <div className={styles.imagePrimary}>
            <Image
              className={styles.image}
              src={ourMission}
              alt="image-primary"
            />
          </div>
        </div>
        <div className={styles.rightContent}>
          <h2 className={cx(styles.heading, "ff-heading")}>Our mission</h2>
          <div className={styles.subHeading}>
            <p>
              The mission here at Revive MD begins with you. Our vision is to
              encourage, educate, and empower you to harness the powers of
              nature to better your health. Through the art of supplementation,
              we strive to help you experience the highest quality of life.
            </p>
          </div>
          <a className="button">Our Formulas</a>
        </div>
      </div>
    </section>
  );
};
