import React from "react";
import get from "lodash/get";
import Head from "next/head";

import { BlogThumbnail } from "../../components/Blog/BlogThumbnail";

import styles from "./Blogs.module.scss";

interface IBlogProps {
  articles: any;
}

const Blogs: React.FC<IBlogProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Bài viết</title>
      </Head>
      <div className={styles.wrapper}>
        {(articles?.data || []).map((item: any) => (
          <BlogThumbnail
            key={item?.id}
            url={item?.id}
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
  const res = await fetch(`http://localhost:1337/api/blogs?populate=thumbnail`);
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
