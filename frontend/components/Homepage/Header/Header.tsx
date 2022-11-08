/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "react-use-cart";

import { BurgerMenu } from "../../BurgerMenu/BurgerMenu";
import { SearchMenu } from "../../SearchMenu/SearchMenu";

import headerLogo from "../../../assets/header-logo.png";
import search from "../../../assets/search.png";
import user from "../../../assets/user.png";
import cart from "../../../assets/cart.png";

import styles from "./Header.module.scss";

const HeaderRight: React.FC = () => {
    const [count, setCount] = useState(0);
    const [openSearchMenu, setOpenSearchMenu] = useState<boolean>(false);
    const { totalUniqueItems } = useCart();

    useEffect(() => {
        setCount(totalUniqueItems)
    }, [totalUniqueItems]);

    return (
        <>
            <div className={styles.headerRight}>
                <a onClick={() => setOpenSearchMenu(true)} className={styles.iconWrap}>
                    <span className={styles.iconButton}>
                        <Image src={search} alt="search" className={styles.rightLogo} width={32} height={32} />
                    </span>
                </a>
                <a href="/user" className={styles.iconWrap}>
                    <span className={styles.iconButton}>
                        <Image src={user} alt="user" className={styles.rightLogo} width={32} height={32} />
                    </span>
                </a>
                <a href="/gio-hang" className={styles.iconWrap}>
                    <span className={styles.iconButton}>
                        <Image src={cart} alt="cart" className={styles.rightLogo} width={32} height={32} />
                    </span>
                    <div className={styles.headerCartCount}>
                        <span>
                            {count || 0}
                        </span>
                    </div>
                </a>
            </div>
            <SearchMenu isOpenMenu={openSearchMenu} setIsOpenMenu={setOpenSearchMenu} />
        </>
    )
}

export const Header: React.FC = () => {

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
                    <HeaderRight />
                </div>
            </header>
        </>
    )
}