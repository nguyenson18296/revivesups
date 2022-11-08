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

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const router = useRouter();

  const getCategories = useCallback(async () => {
    const response = await fromApi.getCategories();
    const categoriesRaw = response?.data;
    const formatCategories: ICategory[] = (categoriesRaw || []).map(
      (item: any) => ({
        id: item.id,
        name: item?.attributes?.name,
        url: kebabCase(deburr(item?.attributes?.name)),
      })
    );
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
            {router?.query?.id === item.id.toString() ? (
              <li className={styles.filterButtonActive}>{item.name}</li>
            ) : (
              <a href={item.id}>
                <li className={styles.filterButton}>{item.name}</li>
              </a>
            )}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
