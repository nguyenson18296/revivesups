/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image, { StaticImageData } from "next/image";
import get from "lodash/get";

import pure from "../../../assets/pure.png";
import labTested from "../../../assets/lab-tested.png";
import noFillers from "../../../assets/no-fillers.png";
import natural from "../../../assets/natural.png";

import styles from "./Categories.module.scss";
import { DOMAIN_URL } from "../../../constants/global";

interface ICategoriesProps {
    categories: any;
}

interface IFeatures {
  name: string;
  thumbnail: StaticImageData;
}

const features: IFeatures[] = [
  {
    name: "Thuần khiết",
    thumbnail: pure,
  },
  {
    name: "Đã được kiểm chứng",
    thumbnail: labTested,
  },
  {
    name: "Không có chất làm đầy",
    thumbnail: noFillers,
  },
  {
    name: "Thiên nhiên",
    thumbnail: natural,
  },
];

export const Categories: React.FC<ICategoriesProps> = ({
    categories
}) => {
  return (
    <>
      <section className="section">
        <div className={styles.innerContent}>
          <div className={styles.collectionGrid}>
            {categories.map((item: any, index: number) => (
              <div className={styles.collectionItem} key={index}>
                <a href={`danh-muc/${item?.attributes?.slug}`}>
                  <img
                    className={styles.image}
                    src={DOMAIN_URL + get(item, "attributes.thumbnail.data.attributes.url")}
                    alt={item?.attributes?.name}
                  />
                </a>
                <div className={styles.collectionItemFooter}>
                  <a href={`danh-muc/${item?.attributes?.slug}`}>{item?.attributes?.name}</a>
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
                Các chất bổ sung có công thức chuyên nghiệp được thực hiện để
                phục hồi sức khỏe hàng ngày của bạn.
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
              <div className={styles.inlineContent}>{item.name}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
