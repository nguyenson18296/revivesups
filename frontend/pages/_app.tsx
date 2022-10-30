import { CartProvider } from "react-use-cart";
import Layout from "../components/Layout/Layout";

import "../styles/globals.css";
// import "../styles/main.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
