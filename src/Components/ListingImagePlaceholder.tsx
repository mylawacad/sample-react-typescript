import React from "react";

interface imgPlaceholderProps {
  colorHex: string;
}

const ImgPlaceholder: React.FC<imgPlaceholderProps> = (props: imgPlaceholderProps) => {
  const { colorHex } = props;
  return (
    <svg
      className="bd-placeholder-img mr-2 rounded"
      width="32"
      height="32"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role="img"
      aria-label="Placeholder: 32x32"
    >
      <title>Placeholder</title>
      <rect width="100%" height="100%" fill={colorHex} />
      <text x="50%" y="50%" fill={colorHex} dy=".3em">
        32x32
      </text>
    </svg>
  )
};

export default ImgPlaceholder;
