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
        {children}
      </div>
    </>
  );
};

export default Layout;
