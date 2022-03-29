import React from "react";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { Projects } from "../components/Projects";

export const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Hero />
      <Projects />
      <Footer />
    </React.Fragment>
  );
};
