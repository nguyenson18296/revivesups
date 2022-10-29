import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import kebabCase from "lodash/kebabCase";
import deburr from "lodash/deburr";

import fromApi from "../../../services/api/api";
import styles from "./Categories.module.scss";

interface ICategory {
  id: string;
  name: string;
  url: string;
}

const Categories: React.FC= () => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const router = useRouter();

    const getCategories = useCallback(async () => {
      const response = await fromApi.getCategories();
      const categoriesRaw = response?.data;
      const formatCategories: ICategory[] = (categoriesRaw || []).map(({ attributes }: { attributes: any }) => ({
        id: kebabCase(deburr(attributes?.name)),
        name: attributes?.name,
        url: kebabCase(deburr(attributes?.name))
      }));
      setCategories(formatCategories);
    }, []);

    useEffect(() => {
      getCategories();
    }, [getCategories]);


  return (
    <div className={styles.filterBar}>
      <ul className={styles.buttonBar}>
        {categories.map((item, index) => (
          <button key={item.id} className={styles.loadCollection}>
              {router.asPath === item.url ? (
                  <li className={styles.filterButtonActive}>
                    {item.name}
                  </li>
              ) : (
                <a href={item.url}>
                    <li className={styles.filterButton}>{item.name}</li>
                </a>
              )}
          </button>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:1337/api/categories')
  const categories = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      categories,
    },
  }
}

export default Categories;
