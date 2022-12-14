/* eslint-disable @next/next/no-img-element */
import React from "react";

import { DOMAIN_URL } from "../../constants/global";

import styles from "./BlogThumbnail.module.scss";

interface IBlogThumbnail {
    url: string;
    title: string;
    subHeading: string;
    thumbnail: string;
}

export const BlogThumbnail: React.FC<IBlogThumbnail> = ({
    url,
    title,
    subHeading,
    thumbnail
}) => {
    return (
        <a href={`/bai-viet/${url}`}>
            <article className={styles.card}>
                <img src={`${DOMAIN_URL}${thumbnail}`} alt="thumbnail" className={styles.cardHero} />
                <div className={styles.cardContent}>
                    <h2 className={styles.cardHeading}>
                            {title}
                    </h2>
                    <p className={styles.subHeading}>
                        {subHeading}
                    </p>
                </div>
            </article>
        </a>
    )
}