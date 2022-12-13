import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import cx from "classnames";
import get from "lodash/get";
import Image from "next/image";

import { API_ENDPOINT_URL } from "../../constants/global";

import headerLogo from "../../assets/header-logo.png";
import styles from "../../styles/Home.module.css";
import stylesFooter from "./Footer.module.scss";

export const Footer = () => {
  const [settings, setSettings] = useState<any>();

  const getSettings = useCallback(async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT_URL}/settings-homepage?populate=*`
      );
      const data = await response.json();
      setSettings(data?.data?.attributes?.social?.data);
    } catch (error: any) {
      throw Error(error);
    }
  }, []);

  useEffect(() => {
    getSettings();
  }, [getSettings]);

  return (
    <footer className={styles.footer}>
      <div className={stylesFooter.siteFooter}>
        <div className={cx(stylesFooter.gridFooter, stylesFooter.logoFooter)}>
          <Image
            src={headerLogo}
            alt="header-logo"
            className={styles.headerLogo}
            height={150}
            width={300}
          />
        </div>
        <div className={cx(stylesFooter.gridFooter, stylesFooter.navFooter)}>
          <ul className={stylesFooter.linksList}>
            <li>
              <Link href="/">LIÊN HỆ</Link>
            </li>
            <li>
              SỐ ĐIỆN THOẠI:{" "}
              <strong>{get(settings, "contact.phone_number")}</strong>
            </li>
            <li>
              TÀI KHOẢN NGÂN HÀNG:{" "}
              <strong>{get(settings, "contact.bank_number")}</strong>
            </li>
          </ul>
          <ul className={stylesFooter.linksList}>
            <li>
              <Link href="/">LIÊN HỆ CHÚNG TÔI</Link>
            </li>
            <li>
              <Link href="/">CHÍNH SÁCH HOÀN TRẢ</Link>
            </li>
            <li>
              <Link href="/">CÁC ĐIỀU KHOẢN VÀ ĐIỀU KIỆN</Link>
            </li>
            <li>
              <Link href="/">PHIẾU GIẢM GIÁ</Link>
            </li>
            <li>
              <Link href="/">KHẢ NĂNG TIẾP CẬN</Link>
            </li>
          </ul>
          <ul>
            <div style={{ marginBottom: 10 }}>Mạng xã hội</div>
            <li className={styles.iconLink}>
              <Link href={`${get(settings, "social.instagram")}`}>
                <a target="_blank" rel="noopener noreferrer">
                  <div
                    className={cx(styles.iconWrapper, styles.instagram)}
                  ></div>
                </a>
              </Link>
            </li>
            <li className={styles.iconLink}>
              <Link href={`${get(settings, "social.facebook")}`}>
                <a target="_blank" rel="noopener noreferrer">
                  <div
                    className={cx(styles.iconWrapper, styles.facebook)}
                  ></div>
                </a>
              </Link>
            </li>
            <li className={styles.iconLink}>
              <Link href={`${get(settings, "social.youtube")}`}>
                <a target="_blank" rel="noopener noreferrer">
                  <div className={cx(styles.iconWrapper, styles.youtube)}></div>
                </a>
              </Link>
            </li>
            <li className={styles.iconLink}>
              <Link href={`${get(settings, "social.pinterest")}`}>
                <a target="_blank" rel="noopener noreferrer">
                  <div
                    className={cx(styles.iconWrapper, styles.pinterest)}
                  ></div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
