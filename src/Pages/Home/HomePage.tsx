import React from "react";
import HeroSectionGradient from "../../Components/HeroSectionGradient";
import ListingsColored from "../../Components/ListingsColored";
import ListingsSeamless from "../../Components/ListingsSeamless";

const Landing: React.FC = () => {
  return (
    <main role="main" className="container">
      <HeroSectionGradient />

      <ListingsColored id="recent" title="Recent listings" />

      <ListingsSeamless id="suggested" title="Suggested Listings" />
    </main>
  );
};

export default Landing;
