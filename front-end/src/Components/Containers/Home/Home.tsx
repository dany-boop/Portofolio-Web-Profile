import { FC } from "react";
import Head from "next/head";

import TopSection from "./Components/TopSection";
import Footer from "../Mixins/Footer";
import Navbar from "../Mixins/Navbar/Navbar";
import ContainerAbout from "./Components/About";

const ContainerHome: FC = () => {
  return (
    <>
      <Head>
        <title>Dany's Place</title>
      </Head>
      <Navbar />
      <main className="bg-amber-50 pt-20">
        <TopSection />
        <ContainerAbout />
      </main>
      <Footer />
    </>
  );
};
export default ContainerHome;
