import React from "react";
import Head from "next/head";
import get from "lodash/get";

import { API_ENDPOINT_URL } from "../../constants/global";

import styles from "./Blogs.module.scss";

interface PostDetail {
  post: any;
}

const PostDetail: React.FC<PostDetail> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{get(post, "data.attributes.title", "")}</title>
      </Head>
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

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`${API_ENDPOINT_URL}/blogs`);
  const posts = await res.json();

  const paths = (posts?.data || []).map((post: any) => ({
    params: { id: post?.id?.toString(), slug: post?.attributes?.slug },
  }));

  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: any }) {
  const res = await fetch(`${API_ENDPOINT_URL}/blogs/${params?.slug}`);
  const post = await res.json();

  return { props: { post } };
}

export default PostDetail;
