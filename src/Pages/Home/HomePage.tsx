import React from "react";
import HeroSectionGradient from "../../Components/HeroSectionGradient";
import ListingsColored from "../../Components/ListingsColored";

const Landing: React.FC = () => {
  return (
    <main role="main" className="container">
      <HeroSectionGradient />

      <ListingsColored id="recent" title="Recent listings" />
    </main>
  );
};

export default Landing;
