/* eslint-disable @next/next/no-img-element */
import React, { useState, useCallback, useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import Image from "next/image";
import cx from "classnames";
import debounce from "lodash/debounce";
import get from "lodash/get";

import fromApi from "../../services/api/api";
import { formatCurrency } from "../../utils/utils";

import closeIcon from "../../assets/close.png";

import styles from "./SearchMenu.module.scss";

interface ISearchMenuProps {
  isOpenMenu: boolean;
  setIsOpenMenu: (state: boolean) => void;
}

export const SearchMenu: React.FC<ISearchMenuProps> = ({
  isOpenMenu,
  setIsOpenMenu,
}) => {
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState<string>("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((e: React.ChangeEvent) => {
      const { value } = e.target as HTMLInputElement;
      setSearch(value);
    }, 350),
    []
  );

  const searchProducts = useCallback(async () => {
    if (isOpenMenu) {
      if (search.length > 0) {
        const [posts, products] = await Promise.all([
          await fromApi.getPosts(search),
          await fromApi.getProducts(search),
        ]);
        setPosts(posts?.data);
        setProducts(products?.data);
      } else {
        setProducts([]);
      }
    }
  }, [search, isOpenMenu]);

  useEffect(() => {
    searchProducts();
  }, [searchProducts]);

  console.log("posts", posts);

  const renderSearchResult = () => {
    if (products.length > 0 || posts.length > 0) {
      return (
        <>
          {products.length > 0 && (
            <div>
              <div className={cx(styles.quickSearchHeader, "ff-heading")}>
                Sản phẩm
              </div>
              {products.map((item: any) => (
                <a
                  href={`/san-pham/${item?.id}`}
                  key={item.id}
                  className={styles.quickSearchResult}
                >
                  <div className={styles.quickSearchImage}>
                    <img
                      src={`http://localhost:1337${get(
                        item,
                        "attributes.thumbnail.data[0].attributes.url",
                        ""
                      )}`}
                      alt="product"
                    />
                  </div>
                  <div className={styles.quickSearchDetail}>
                    <div className={styles.quickSearchHeading}>
                      {get(item, "attributes.name", "")}
                    </div>
                    <div className={styles.quickSearchSubHeading}>
                      <span>
                        {formatCurrency(get(item, "attributes.price", 0))}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
          {posts.length > 0 && (
            <div>
              <div className={cx(styles.quickSearchHeader, "ff-heading")}>
                Bài viết
              </div>
              {posts.map((item: any) => (
                <a
                  href={`/bai-viet/${item?.id}`}
                  key={item.id}
                  className={styles.quickSearchResult}
                >
                  <div className={styles.quickSearchImage}>
                    <img
                      src={`http://localhost:1337${get(
                        item,
                        "attributes.thumbnail.data.attributes.url",
                        ""
                      )}`}
                      alt="product"
                    />
                  </div>
                  <div className={styles.quickSearchDetail}>
                    <div className={styles.quickSearchHeading}>
                      {get(item, "attributes.title", "")}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </>
      );
    } else if (search.length > 0 && products.length === 0) {
      return <div>Không tìm thấy kết quả tìm kiếm</div>;
    } else if (search.length === 0) {
      return null;
    }
    return null;
  };

  return (
    <Menu
      width={640}
      onOpen={() => setIsOpenMenu(true)}
      onClose={() => setIsOpenMenu(false)}
      isOpen={isOpenMenu}
      pageWrapId="__next"
      right
      className="bm-menu-wrap-right"
      customCrossIcon={
        <Image src={closeIcon} height={42} width={42} alt="close" />
      }
      customBurgerIcon={false}
    >
      <div className={styles.quickSearchContainer}>
        <div className={styles.quickSearchHeadingTitle}>Tìm kiếm</div>
        <form>
          <input
            placeholder="Tìm kiếm"
            className={styles.input}
            onChange={handleSearch}
          />
          <div className={styles.quickSearchWrapper}>
            {renderSearchResult()}
          </div>
        </form>
      </div>
    </Menu>
  );
};
