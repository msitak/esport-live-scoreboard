import React, { useState } from "react";
import { ImageWithFallbackProps } from "./ImageWithFallback.types";

const ImageWithFallback = ({
  src,
  fallbackSrc,
  alt,
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return <img src={imgSrc} alt={alt} onError={handleError} />;
};

export default ImageWithFallback;
