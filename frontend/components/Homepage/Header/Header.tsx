/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BurgerMenu } from "../../BurgerMenu/BurgerMenu";

import headerLogo from "../../../assets/header-logo.png";
import search from "../../../assets/search.png";
import user from "../../../assets/user.png";
import cart from "../../../assets/cart.png";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.innerHeader}>
                    <div className={styles.headerLeft}>
                        <BurgerMenu />
                    </div>
                    <div className={styles.headerCenter}>
                        <a href="/">
                            <Image src={headerLogo} alt="header-logo" className={styles.headerLogo} height={38} width={160} />
                        </a>
                    </div>
                    <div className={styles.headerRight}>
                        <a href="/search" className={styles.iconWrap}>
                            <span className={styles.iconButton}>
                                <Image src={search} alt="search" className={styles.rightLogo} width={32} height={32} />
                            </span>
                        </a>
                        <a href="/user" className={styles.iconWrap}>
                            <span>
                                <Image src={user} alt="user" className={styles.rightLogo} width={32} height={32} />
                            </span>
                        </a>
                        <a href="/cart" className={styles.iconWrap}>
                            <span>
                                <Image src={cart} alt="cart" className={styles.rightLogo} width={32} height={32} />
                            </span>
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}