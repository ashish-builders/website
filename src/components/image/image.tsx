"use client";

import { styled } from "@mui/material";
import NextImage, { ImageProps } from "next/image";
import React from "react";

//  normalize helper (fixes %2520 → %20)
const normalizeSrc = (src: ImageProps["src"]) => {
  if (typeof src !== "string") return src;

  try {
    let prev;
    do {
      prev = src;
      src = decodeURIComponent(src);
    } while (src !== prev);
    return src;
  } catch {
    return src;
  }
};

const BaseImage = React.forwardRef<HTMLImageElement, ImageProps>(
  function BaseImage(props, ref) {
    const { src, ...rest } = props;
    return <NextImage ref={ref} src={normalizeSrc(src)} {...rest} />;
  }
);

export const Image = styled(BaseImage)({});
