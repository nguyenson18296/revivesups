import type { NextPage } from "next";
import Head from "next/head";

import { Banner } from "../components/Homepage/Banner/Banner";
import { NewProduct } from "../components/Homepage/NewProduct/NewProduct";
import { OurMission } from "../components/Homepage/OurMission/OurMission";
import { Categories } from "../components/Homepage/Categories/Categories";
import { DailyEssentials } from "../components/Homepage/DailyEssentials/DailyEssentials";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CellFit</title>
      </Head>
      <Banner />
      <NewProduct />
      <OurMission />
      <Categories />
      <DailyEssentials heading="Daily Essentials" />
    </>
  );
};

export default Home;
