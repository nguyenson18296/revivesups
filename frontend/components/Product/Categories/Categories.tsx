import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Categories.module.scss";

const mockCategories = [
  {
    id: 1,
    name: "Daily Essentials",
    url: "/san-pham/daily-essentials",
  },
  {
    id: 2,
    name: "Daily Essentials",
    url: "/san-pham/digestive-health",
  },
  {
    id: 3,
    name: "Daily Essentials",
    url: "/san-pham/digestive-health",
  },
  {
    id: 4,
    name: "Daily Essentials",
    url: "/san-pham/digestive-health",
  },
  {
    id: 5,
    name: "Daily Essentials",
    url: "/san-pham/digestive-health",
  },
  {
    id: 6,
    name: "Daily Essentials",
    url: "/san-pham/digestive-health",
  },
  {
    id: 7,
    name: "Daily Essentials",
    url: "/san-pham/digestive-health",
  },
];

export const Categories: React.FC = () => {
    const router = useRouter();

  return (
    <div className={styles.filterBar}>
      <ul className={styles.buttonBar}>
        {mockCategories.map((item) => (
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
