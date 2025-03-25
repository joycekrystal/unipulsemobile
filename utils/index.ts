import { Platform } from "react-native";

export const checkPlatform = (platform: "ios" | "android") => {
  return Platform.OS === platform;
};
