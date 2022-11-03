import React from "react";
import get from "lodash/get";

import { API_ENDPOINT_URL } from "../../constants/global";

import styles from "./Blogs.module.scss";

interface PostDetail {
    post: any;
}

const PostDetail: React.FC<PostDetail> = ({
    post
}) => {
    return (
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
                            <div dangerouslySetInnerHTML={{
                                __html: get(post, "data.attributes.post", "")
                            }} />
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    const res = await fetch(`${API_ENDPOINT_URL}/blogs?populate=thumbnail`);
    const products = await res.json();
  
    const paths = (products?.data || []).map((product: any) => ({
      params: { id: product?.id?.toString() },
    }))
  
    return { paths, fallback: false }
  }
  
  // This also gets called at build time
  export async function getStaticProps({ params }: { params: any}) {
    const res = await fetch(`${API_ENDPOINT_URL}/blogs/${params.id}?populate=thumbnail`)
    const post = await res.json();
  
    return { props: { post } };
  }

  export default PostDetail;
