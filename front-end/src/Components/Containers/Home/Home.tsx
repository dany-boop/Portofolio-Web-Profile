import { FC } from "react";
import Head from "next/head";

import TopSection from "./Components/TopSection";
import Footer from "../Mixins/Footer";
import Navbar from "../Mixins/Navbar/Navbar";
import ContainerAbout from "./Components/About";
import Containercontact from "./Components/contact";
import ContainerProjects from "./Components/Projects";
import ScrollToTop from "@/Components/Common/ScrollToTop";

const ContainerHome: FC = () => {
  return (
    <>
      <Head>
        <title>ME</title>
      </Head>
      <Navbar />
      <main className="container pb-10 bg-amber-50 pt-20">
        <ScrollToTop/>
        <TopSection />
        <ContainerAbout />
        <ContainerProjects />
        <Containercontact />
      </main>
      <Footer />
    </>
  );
};
export default ContainerHome;
