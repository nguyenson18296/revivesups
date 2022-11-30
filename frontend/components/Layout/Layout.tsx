import Head from "next/head";
import cx from "classnames";
import Link from "next/link";

import { Header } from "../Homepage/Header/Header";
import styles from "../../styles/Home.module.css";

interface ILayout {
    children: JSX.Element;
}

const Layout: React.FC<ILayout> = ({
    children
}) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>CellFit - Dinh Dưỡng Sức Khoẻ</title>
          <meta name="description" content="CellFit" />
          <link rel="icon" href="/header-logo.png" />
        </Head>
        <Header />
        <main id="page-wrap" className={styles.main}>
            {children}
        </main>

        <footer className={styles.footer}>
         <div>
          © 2022, CellFit
         </div>
         <div className={styles.socialLinks}>
          <ul>
            <li className={styles.iconLink}>
              <Link href="https://instagram.com/cellfitvn?igshid=YmMyMTA2M2Y=">
                <a target="_blank" rel="noopener noreferrer">
                  <div className={cx(styles.iconWrapper, styles.instagram)}>

                  </div>
                </a>
              </Link>
            </li>
            <li className={styles.iconLink}>
            <Link href="https://www.facebook.com/cellfitvn/">
              <a target="_blank" rel="noopener noreferrer">
                <div className={cx(styles.iconWrapper, styles.facebook)}>

                </div>
              </a>
            </Link>
            </li>
            <li className={styles.iconLink}>
            <Link href="https://www.youtube.com/CellFitVn">
              <a target="_blank" rel="noopener noreferrer">
                <div className={cx(styles.iconWrapper, styles.youtube)}>

                </div>
              </a>
            </Link>
            </li>
            <li className={styles.iconLink}>
            <Link href="https://pin.it/1HEVhoc">
              <a target="_blank" rel="noopener noreferrer">
                <div className={cx(styles.iconWrapper, styles.pinterest)}>

                </div>
              </a>
            </Link>
            </li>
          </ul>
         </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
