import type { NextPage } from "next";
import Head from "next/head";

import { Banner } from "../components/Homepage/Banner/Banner";
import { NewProduct } from "../components/Homepage/NewProduct/NewProduct";
import { Categories } from "../components/Homepage/Categories/Categories";
import { DailyEssentials } from "../components/Homepage/DailyEssentials/DailyEssentials";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CellFit - Dinh Dưỡng Sức Khoẻ</title>
      </Head>
      <Banner />
      <Categories />
      <NewProduct />
      <DailyEssentials heading="Daily Essentials" />
    </>
  );
};

export default Home;
