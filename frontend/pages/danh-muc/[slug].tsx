import React, { useEffect, useState } from "react";
import Head from "next/head";
import get from "lodash/get";

import { API_ENDPOINT_URL, IProductItemProps } from "../../constants/global";
import Categories from "../../components/Product/Categories/Categories";
import { ProductItem } from "../../components/Product/ProductItem";

import productImage from "../../assets/product-item.png";
import styles from "./ProductsPage.module.scss";

interface ICategoryProducts {
  category: any;
}

const ProductsPage: React.FC<ICategoryProducts> = ({ category }) => {
  const [categoryProducts, setCategoryProducts] = useState<IProductItemProps[]>(
    []
  );

  useEffect(() => {
    const products = get(category, "data.attributes.products.data", []);
    const formatProducts: IProductItemProps[] = products.map((item: any) => ({
      id: item.id.toString(),
      name: get(item, "attributes.name", ""),
      url: `san-pham/${item?.attributes?.slug}`,
      pricing: get(item, "attributes.price", ""),
      sold_out: get(item, "attributes.sold_out", false),
      thumbnail: get(item, "attributes.thumbnail.data[0].attributes.url", ""),
    }));
    setCategoryProducts(formatProducts);
  }, [category]);

  return (
    <>
      <Head>
          <title>
              Danh mục
          </title>
      </Head>
      <section className={styles.collectionSection}>
        <div className={styles.collectionHeader}>
          <div className={styles.collectionHeaderInner}>
            <h2 className={styles.colectionHeader}>
              {get(category, "data.attributes.name")}
            </h2>
            <div className={styles.filterBar}>
              <div className={styles.collectionContent}>
                <Categories />
              </div>
            </div>
            <div className={styles.collectionFiltersContainer} />
            <div className={styles.collectionProducts}>
              {categoryProducts.map((item: any, index: number) => {
                return (
                  <div key={index} className={styles.productItem}>
                    <ProductItem {...item} canAddToCart />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch(`${API_ENDPOINT_URL}/categories`);
  const categories = await res.json();


  const paths = (categories?.data || []).map((category: any) => {
    return ({
      params: { id: category?.id?.toString(), slug: category?.attributes?.slug },
    })
  })

  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }: { params: any }) {
  const response = await fetch(
    `${API_ENDPOINT_URL}/categories/${params.slug}`
  );
  const category = await response.json();

  return { props: { category } };
}

export default ProductsPage;
