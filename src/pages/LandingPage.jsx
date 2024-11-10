import React from "react";
import Strength from "../components/strengths/Strength";
import MissionStatement from "../components/MissionStatement";
import NavHero from "../components/NavHero";
import Videos from "../components/Videos";
import AboutTeam from "../components/AboutTeam";
import Footer from "../components/Footer";
import SupportUs from "../components/SupportUs";

const LandingPage = () => {
  return (
    <>
      <NavHero />
      <Videos />
      <MissionStatement />
      <SupportUs />
      <Strength />
      <AboutTeam />
      <Footer />
    </>
  );
};

export default LandingPage;
