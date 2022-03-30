import React from "react";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { Projects } from "../components/Projects";
import { Timeline } from "../components/Timeline";

export const HomePage: React.FC = () => {
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
