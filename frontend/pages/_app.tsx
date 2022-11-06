import { CartProvider } from "react-use-cart";
import { ToastContainer } from "react-toastify";

import Layout from "../components/Layout/Layout";

import 'react-toastify/dist/ReactToastify.min.css';
import "../styles/globals.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
