import React from "react";
import { Image } from "react-native";
import { ASSETS } from "@/constants";

export const AppLogo: React.FC<{ small?: boolean; className?: string }> = ({
  small,
  className,
}) => {
  if (small) {
    return (
      <Image source={ASSETS.BRAND_LOGO} className={`w-16 h-16 ${className}`} />
    );
  }

  return (
    <Image source={ASSETS.BRAND_LOGO} className={`w-48 h-48 ${className}`} />
  );
};
