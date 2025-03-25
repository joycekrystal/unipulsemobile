import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import { ASSETS } from "@/constants";

const announcementBoards = ["upcoming", "ongoing"];

export const AnnouncementBoards: React.FC = () => {
  return (
    <View className="flex-1">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        className="flex-1"
        horizontal
      >
        <View className="flex flex-row gap-5">
          {announcementBoards.map((a, index) => (
            <ImageBackground
              key={a}
              source={index === 0 ? ASSETS.UPCOMING_IMG : ASSETS.ONGOING_IMG}
              resizeMethod="auto"
              resizeMode="cover"
              className="h-[130px] w-[140px] bg-slate-200 relative"
              style={{ borderRadius: 15, overflow: "hidden" }}
            >
              <View className="w-full flex justify-center items-center absolute bottom-3">
                <View className="w-[85%] py-2 bg-[rgba(255,255,255,0.85)] rounded-xl">
                  <Text className="text-sm font-bold text-center capitalize">
                    {a}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
