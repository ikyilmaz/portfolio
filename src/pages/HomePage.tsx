import React, { useEffect } from "react";
import { AnimatedNav } from "../components/NavigationBar/AnimatedNav";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Timeline } from "../components/Timeline";

export const HomePage: React.FC = () => {
  useEffect(() => {
    // Anlam veremedim ama düzelteceğiz
    window.scrollTo({ top: 0 });
  });
  return (
    <React.Fragment>
      <AnimatedNav />
      <Hero />
      <Timeline />
      <Projects />
      <Footer />
    </React.Fragment>
  );
};
