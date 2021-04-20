import logo from "../static/images/logos/logo.svg";
// import './App.css';
import Layout from "../components/layout/layout";
import { Link } from "react-router-dom";
import HeroSection from "../components/sections/HeroSection";

function IndexPage() {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
}

export default IndexPage;
