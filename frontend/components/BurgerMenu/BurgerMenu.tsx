/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Image from "next/image";
import cx from "classnames";

import closeIcon from "../../assets/close.png";
import styles from "./BurgerMenu.module.scss";

export const BurgerMenu: React.FC = ({
}) => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false); 

    return (
        <Menu
            width={640}
            onOpen={() => setIsOpenMenu(true)}
            onClose={() => setIsOpenMenu(false)}
            isOpen={isOpenMenu}
            pageWrapId="page-wrap"
            customCrossIcon={<Image src={closeIcon} height={42} width={42} alt="close" />}
        >
            <div className={styles.slideMenuContent}>
                <ul className={styles.drawerAllLinks}>
                    <li className={styles.drawerMenuItem}>
                        <a
                            id="home" 
                            className={cx("menu-item", styles.menuItem, styles.menuItemPrimary)}
                            href="/danh-muc/daily-essentials"
                        >
                            Shop Vitamins
                        </a>
                    </li>
                    <li className={styles.drawerMenuItem}>
                    <a
                        id="home" 
                        className={cx("menu-item", styles.menuItem, styles.menuItemPrimary)}
                        href="/"
                    >
                        Shop Bundles
                    </a>
                </li>
                <li className={styles.drawerMenuItem}>
                    <a
                        id="home" 
                        className={cx("menu-item", styles.menuItem, styles.menuItemPrimary)}
                        href="/"
                    >
                        Shop Lifestyle
                    </a>
                </li>
                <li className={styles.drawerMenuItem}>
                    <a
                        id="home" 
                        className={cx("menu-item", styles.menuItem, styles.menuItemPrimary)}
                        href="/"
                    >
                        About us
                    </a>
                </li>
                <li className={styles.drawerMenuItem}>
                    <a
                        id="home" 
                        className={cx("menu-item", styles.menuItem, styles.menuItemPrimary, styles.menuItemPrimaryLast)}
                        href="/"
                    >
                        Contact us
                    </a>
                </li>
                <li className={styles.drawerMenuItem}>
                    <a
                        id="home" 
                        className={cx("menu-item", styles.menuItem, styles.menuItemSecondary)}
                        href="/"
                    >
                        Search
                    </a>
                </li>
                <li className={styles.drawerMenuItem}>
                    <a
                        id="home" 
                        className={cx("menu-item", styles.menuItem, styles.menuItemSecondary)}
                        href="/"
                    >
                        Contact
                    </a>
                </li>
                <li className={styles.drawerMenuItem}>
                    <a
                        id="home" 
                        className={cx("menu-item", styles.menuItem, styles.menuItemSecondary)}
                        href="/"
                    >
                        Register / Login
                    </a>
                </li>
                </ul>
            </div>
        </Menu>
    )
}
