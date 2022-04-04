import React, { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { Projects } from "../components/Projects";
import { Timeline } from "../components/Timeline";

export const HomePage: React.FC = () => {
  useEffect(() => {
    // Anlam veremedim ama düzelteceğiz
    window.scrollTo({ top: 0 });
  });
  return (
    <React.Fragment>
      <NavigationBar />
      <Hero />
      <Timeline />
      <Projects />
      <Footer />
    </React.Fragment>
  );
};
