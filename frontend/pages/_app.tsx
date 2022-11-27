import { CartProvider } from "react-use-cart";
import { ToastContainer } from "react-toastify";
import { NextSeo } from "next-seo";

import Layout from "../components/Layout/Layout";

import 'react-toastify/dist/ReactToastify.min.css';
import "../styles/globals.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Revivesup - Trang chủ"
        description="Revivesup - Trang chủ"
        openGraph={{
          url: "https://cellfit.vn/",
          title: "Revivesup",
          description: "Revivesup - Trang chủ",
          images: [
            {
              url: "../public/header-logo.png",
              width: 300,
              height: 300,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            }
          ]
        }}
      />
      <CartProvider>
      <ToastContainer />
        <Layout>
        <Component {...pageProps} />
        </Layout>
    </CartProvider> 
    </>
  );
}

export default MyApp;
