/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useCallback, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import kebabCase from "lodash/kebabCase";
import deburr from "lodash/deburr";
import take from "lodash/take";

import fromApi from "../../services/api/api";

import closeIcon from "../../assets/close.png";
import styles from "./BurgerMenu.module.scss";

interface ICategory {
    id: string;
    name: string;
    url: string;
  }

export const BurgerMenu: React.FC = ({
}) => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const [categories, setCategories] = useState<ICategory[]>([]);

    const getCategories = useCallback(async () => {
        // const response = await fromApi.getCategories();
        const response = await fetch("http://localhost:1337/api/categories");
        const data = await response.json();
        // const categoriesRaw = response?.data;
        // console.log("categoriesRaw", categoriesRaw);
        const formatCategories: ICategory[] = (data?.data || []).map((item: any) => ({
            id: item.id,
            name: item?.attributes?.name,
            url: kebabCase(deburr(item?.id))
        }));
        setCategories(take(formatCategories, 3));
      }, []);
  
      useEffect(() => {
        getCategories();
      }, [getCategories]);

      console.log("categories", categories);

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
                    {categories.map((item => (
                        <li key={item.id} className={styles.drawerMenuItem}>
                            <a
                                id={item.name} 
                                className={cx("menu-item", styles.menuItem, styles.menuItemPrimary)}
                                href={`/danh-muc/${item.url}`}
                            >
                                {item.name}
                            </a>
                        </li>
                    )))}
                    {/* <li className={styles.drawerMenuItem}>
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
                </li> */}
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
