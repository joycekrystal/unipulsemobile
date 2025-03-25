import React from "react";
import {
  View,
  ImageBackground,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { ASSETS } from "@/constants";

export const OrganizationBannersScroll: React.FC = () => {
  const handleOrgSelect = () => {
    Alert.alert("Sorry, this feature is not available yet");
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
      <View className="flex flex-row gap-3">
        <Pressable onPress={handleOrgSelect}>
          <ImageBackground
            source={ASSETS.ORG_BANNER}
            resizeMethod="auto"
            resizeMode="contain"
            className="w-[220px] h-[90px] rounded-2xl shadow-sm"
          />
        </Pressable>
        <Pressable onPress={handleOrgSelect}>
          <ImageBackground
            source={ASSETS.ORG_BANNER}
            resizeMethod="auto"
            resizeMode="contain"
            className="w-[220px] h-[90px] rounded-2xl shadow-sm"
          />
        </Pressable>
        <Pressable onPress={handleOrgSelect}>
          <ImageBackground
            source={ASSETS.ORG_BANNER}
            resizeMethod="auto"
            resizeMode="contain"
            className="w-[220px] h-[90px] rounded-2xl shadow-sm"
          />
        </Pressable>
        <Pressable onPress={handleOrgSelect}>
          <ImageBackground
            source={ASSETS.ORG_BANNER}
            resizeMethod="auto"
            resizeMode="contain"
            className="w-[220px] h-[90px] rounded-2xl shadow-sm"
          />
        </Pressable>
        <Pressable onPress={handleOrgSelect}>
          <ImageBackground
            source={ASSETS.ORG_BANNER}
            resizeMethod="auto"
            resizeMode="contain"
            className="w-[220px] h-[90px] rounded-2xl shadow-sm"
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};
