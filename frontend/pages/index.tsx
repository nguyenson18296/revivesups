import { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import get from "lodash/get";

import { API_ENDPOINT_URL } from "../constants/global";
import { Banner } from "../components/Homepage/Banner/Banner";
import { NewProduct } from "../components/Homepage/NewProduct/NewProduct";
import { Categories } from "../components/Homepage/Categories/Categories";
import { DailyEssentials } from "../components/Homepage/DailyEssentials/DailyEssentials";
import { Footer } from "../components/Layout/Footer";

const Home: NextPage = () => {
  const [settings, setSettings] = useState<any>();

  const getSettings = useCallback(async () => {
    try {
      const response = await fetch(
        `${API_ENDPOINT_URL}/settings-homepage?populate=*`
      );
      const data = await response.json();
      setSettings(data?.data?.attributes);
    } catch (error: any) {
      throw Error(error);
    }
  }, []);

  useEffect(() => {
    getSettings();
  }, [getSettings]);

  return (
    <>
      <main>
        <Head>
          <title>CellFit - Dinh Dưỡng Sức Khoẻ</title>
        </Head>
        <Banner
          banner_url={get(settings, "banner.data.attributes.url", "")}
          bannerData={get(settings, "banner_text")}
          marquee={get(settings, "marquee.data")}
        />
        <Categories categories={get(settings, "categories.data", [])} />
        <NewProduct
          new_product={get(settings, "new_product")}
          productLink={get(settings, "product.data.attributes.slug", "")}
          new_product_sub_header={get(settings, "new_product_sub_header")}
        />
        <DailyEssentials heading="Daily Essentials" />
      </main>
      <Footer data={get(settings, "social.data")} />
    </>
  );
};

export default Home;
