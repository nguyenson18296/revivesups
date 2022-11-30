import React from "react";
// import Head from "next/head";
import get from "lodash/get";
import { NextSeo } from "next-seo";

import { API_ENDPOINT_URL, DOMAIN_URL } from "../../constants/global";

import styles from "./Blogs.module.scss";

interface PostDetail {
  post: any;
}

const PostDetail: React.FC<PostDetail> = ({ post }) => {
  console.log("post", DOMAIN_URL + get(post, "data.attributes.thumbnail.data.attributes.url", ""));

  return (
    <>
      <NextSeo
         title={get(post, "data.attributes.title", "")}
         openGraph={{
          url: `https://cellfit.vn/bai-viet/${get(post, "data.attributes.slug", "")}`,
          title: get(post, "data.attributes.title", ""),
          description: "Selling gym stuffs",
          images: [
            {
              url: DOMAIN_URL + get(post, "data.attributes.thumbnail.data.attributes.url", ""),
              width: 300,
              height: 300,
              alt: get(post, "data.attributes.title", ""),
              type: 'image/jpeg',
            }
          ]
        }}
      />
      <div className={styles.postContainer}>
        <div className={styles.postWrapper}>
          <div className={styles.region}>
            <article className={styles.prose}>
              <header className={styles.header}>
                <h1 className={styles.title}>
                  {get(post, "data.attributes.title", "")}
                </h1>
              </header>
              <div className={styles.postContent}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: get(post, "data.attributes.post", ""),
                  }}
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

// // This function gets called at build time
// export async function getStaticPaths() {
//   const res = await fetch(`${API_ENDPOINT_URL}/blogs`);
//   const posts = await res.json();

//   const paths = (posts?.data || []).map((post: any) => ({
//     params: { id: post?.id?.toString(), slug: post?.attributes?.slug },
//   }));

//   return { paths, fallback: false };
// }

// This also gets called at build time
export async function getServerSideProps({ params }: { params: any }) {
  const res = await fetch(`${API_ENDPOINT_URL}/blogs/${params?.slug}`);
  const post = await res.json();

  return { props: { post } };
}

export default PostDetail;
