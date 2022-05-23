import React from "react";
import ListingsColored from "../../Components/ListingsColored";
import ListingsSeamless from "../../Components/ListingsSeamless";

const titleSectionStyle = {
  padding: "35px 0"
}

const Landing: React.FC = () => {
  return (
    <main role="main" className="container">
      <div style={titleSectionStyle}>
        <h1>Find Your Next Listing</h1>
        <small>Market leaders since 1995</small>
      </div>

      <ListingsColored id="recent" title="Recent listings" />

      <ListingsSeamless id="suggested" title="Suggested Listings" />
    </main>
  );
};

export default Landing;
