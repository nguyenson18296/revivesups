import React from "react";
import get from "lodash/get";
import { NextSeo } from "next-seo";

import { BlogThumbnail } from "../../components/Blog/BlogThumbnail";
import { API_ENDPOINT_URL } from "../../constants/global";

import styles from "./Blogs.module.scss";

interface IBlogProps {
  articles: any;
}

const Blogs: React.FC<IBlogProps> = ({ articles }) => {
  return (
    <>
      <NextSeo
        title="CellFit - Bài viết"
        description="Blog bài viết"
        openGraph={{
          url: "https://cellfit.vn/bai-viet",
          title: "CellFit - Bài viết",
          description: "Blog bài viết",
          images: [
            {
              url: "../../public/header-logo",
              width: 300,
              height: 300,
              alt: 'CellFit - Bài viết',
              type: 'image/jpeg',
            }
          ]
        }}
      />
      <h1 className={styles.pageTitle}>
          Bài viết
        </h1>
      <div className={styles.wrapper}>
        {(articles?.data || []).map((item: any) => (
          <BlogThumbnail
            key={item?.id}
            url={get(item, "attributes.slug", "")}
            title={get(item, "attributes.title", "")}
            subHeading={get(item, "attributes.subheading", "")}
            thumbnail={get(
              item,
              "attributes.thumbnail.data.attributes.url",
              ""
            )}
          />
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_ENDPOINT_URL}/blogs?populate=thumbnail`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles: data,
    }, // will be passed to the page component as props
  };
}

export default Blogs;
