import React from "react";


const heroSectionStyles = {
  backgroundColor: "#ffffff",
  backgroundImage: "linear-gradient(0deg, #D2D2D2 0%, #97D9E1 50%)",
  boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.3)",
  minHeight: "400px",
};

const heroSectionHeaderStyle = {
  color: "#ffffff",
  fontSize: "4em",
  fontWeight: "300"
};

const heroSectionTextStyle = {
  color: "#ffffff",
  fontSize: "1em",
  fontWeight: "300"
};

const HeroSectionGradient: React.FC = () => {
  return (
    <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm" style={heroSectionStyles}>
      <div className="lh-100">
        <h6 className="mb-0 lh-100" style={heroSectionHeaderStyle}>Find Your Next Listing</h6>
        <small style={heroSectionTextStyle}>Market leaders since 1995</small>
      </div>
    </div>
  );
};

export default HeroSectionGradient;
