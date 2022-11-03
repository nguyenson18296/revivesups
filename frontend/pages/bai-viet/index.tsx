import React from "react";
import get from "lodash/get";

import { BlogThumbnail } from "../../components/Blog/BlogThumbnail";
import { API_ENDPOINT_URL } from "../../constants/global";

import styles from "./Blogs.module.scss";

interface IBlogProps {
  articles: any;
}

const Blogs: React.FC<IBlogProps> = ({
    articles
}) => {
  console.log("articles", articles);
    return (
        <div className={styles.wrapper}>
          {(articles?.data || []).map((item: any) => (
            <BlogThumbnail
              key={item?.id}
              url={item?.id}
              title={get(item, "attributes.title", "")}
              subHeading={get(item, "attributes.subheading", "")}
              thumbnail={get(item, "attributes.thumbnail.data.attributes.url", "")}
            />
          ))}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:1337/api/blogs?populate=thumbnail`);
    const data = await res.json();
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {
          articles: data
      }, // will be passed to the page component as props
    }
  }

export default Blogs;
