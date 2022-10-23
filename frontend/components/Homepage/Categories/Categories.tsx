import React from "react";
import Image, { StaticImageData } from "next/image";

import mensHealth from "../../../assets/mens-health.png";
import womensHealth from "../../../assets/womens-health.png";
import heartHealth from "../../../assets/heart-health.png";
import organHealth from "../../../assets/organ-health.png";
import pure from "../../../assets/pure.png";
import labTested from "../../../assets/lab-tested.png";
import noFillers from "../../../assets/no-fillers.png";
import natural from "../../../assets/natural.png";

import styles from "./Categories.module.scss";

interface ICategories {
  name: string;
  url: string;
  thumbnail: StaticImageData;
}

interface IFeatures {
    name: string;
    thumbnail: StaticImageData;
}

const categories: ICategories[] = [
  {
    name: "Men's Health",
    url: "/collections/mens-health",
    thumbnail: mensHealth,
  },
  {
    name: "Women's Health",
    url: "/collections/womans-health",
    thumbnail: womensHealth,
  },
  {
    name: "Heart Health",
    url: "/collections/heart-health",
    thumbnail: heartHealth,
  },
  {
    name: "Organ Health",
    url: "/collections/organ-health",
    thumbnail: organHealth,
  },
];

const features: IFeatures[] = [
    {
        name: "Pure",
        thumbnail: pure
    },
    {
        name: "Lab Tested",
        thumbnail: labTested
    },
    {
        name: "No Fillers",
        thumbnail: noFillers
    },
    {
        name: "Natural",
        thumbnail: natural
    },
]

export const Categories: React.FC = () => {
  return (
    <>
        <section className="section">
            <div className={styles.innerContent}>
                <div className={styles.collectionGrid}>
                {categories.map((item, index) => (
                    <div className={styles.collectionItem} key={index}>
                    <a href={item.url}>
                        <Image
                        className={styles.image}
                        src={item.thumbnail}
                        alt={item.name}
                        />
                    </a>
                    <div className={styles.collectionItemFooter}>
                        <a href={item.url}>{item.name}</a>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
        <section className="section">
            <div className={styles.innerFormulatedText}>
                <div className={styles.subHeading}>
                    <em>
                        <strong>
                            Expertly formulated supplements made to revive your everyday health.
                        </strong>
                    </em>
                </div>
            </div>
        </section>
        <section className="section">
            <div className={styles.innerFeatures}>
                {features.map((item, index) => (
                    <div className={styles.featureItem} key={index}>
                        <div className={styles.inlineFeatureImage}>
                            <Image src={item.thumbnail} alt={item.name} />
                        </div>
                        <div className={styles.inlineContent}>
                            {item.name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
  );
};
