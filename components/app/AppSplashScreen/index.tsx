import React from "react";
import { ImageBackground, Image, Text } from "react-native";
import { AppLogo } from "./../AppLogo";
import { ASSETS } from "@/constants";

export const AppSplashScreen: React.FC = () => {
  return (
    <ImageBackground
      className="flex-1 justify-center items-center"
      resizeMode="cover"
      source={ASSETS.AUTH_BG}
    >
      <AppLogo />
      <Text className="text-3xl text-white font-bold mt-8">Uni-Pulse</Text>
    </ImageBackground>
  );
};
