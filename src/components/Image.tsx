import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  placeholder?: "blurred" | "dominantColor" | "none";
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height }) => (
  <img src={src} alt={alt} width={width} height={height} loading="lazy" />
);

export default Image;
