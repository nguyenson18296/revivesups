import React from "react";

import { Categories } from "../../components/Product/Categories/Categories";
import { ProductItem, IProductItemProps } from "../../components/Product/ProductItem";

import productImage from "../../assets/product-item.png";
import styles from "./ProductsPage.module.scss";

const mockProducts: IProductItemProps[] = [
    {
        name: "K2 & D3 Bundle",
        url:"/products/k2-d3-bundle",
        pricing: "100.000",
        thumbnail: productImage
    },
    {
        name: "K2 & D3 Bundle",
        url:"/products/k2-d3-bundle",
        pricing: "100.000",
        thumbnail: productImage
    },
    {
        name: "K2 & D3 Bundle",
        url:"/products/k2-d3-bundle",
        pricing: "100.000",
        thumbnail: productImage
    },
    {
        name: "K2 & D3 Bundle",
        url:"/products/k2-d3-bundle",
        pricing: "100.000",
        thumbnail: productImage
    },
    {
        name: "K2 & D3 Bundle",
        url:"/products/k2-d3-bundle",
        pricing: "100.000",
        thumbnail: productImage
    },
    {
        name: "K2 & D3 Bundle",
        url:"/products/k2-d3-bundle",
        pricing: "100.000",
        thumbnail: productImage
    }
]

const ProductsPage: React.FC = () => {
    return (
        <section className={styles.collectionSection}>
             <div className={styles.collectionHeader}>
            <div className={styles.collectionHeaderInner}>
                <h2 className={styles.colectionHeader}>
                    Bundles
                </h2>
                <div className={styles.filterBar}>
                    <div className={styles.collectionContent}>
                        <Categories />
                    </div>
                </div>
                <div className={styles.collectionFiltersContainer} />
                <div className={styles.collectionProducts}>
                    {mockProducts.map((item, index) => {
                        return (
                            <div key={index} className={styles.productItem}>
                                <ProductItem {...item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </section>
    )
};

export default ProductsPage;
