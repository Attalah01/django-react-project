import Header from "components/about/Header";
import Clients from "components/about/Clients";
import Features from "components/about/Features";
import TestStats from "components/about/TestStats";
import LogoCloud from "components/about/LogoCloud";
import CTA from "components/about/CTA";
import Team from "components/about/Team";
import Images from "components/about/Images";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Navbar />
      <div className="pt-28">
        <Header />
        <TestStats />
        <Images />
        <Clients />
        <LogoCloud />
        <Features />
        <Team />
        <CTA />
      </div>
      <Footer />
    </Layout>
  )
}
export default About;
