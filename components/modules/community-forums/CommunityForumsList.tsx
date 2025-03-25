import React from "react";
import { View, Text, Image } from "react-native";
import { ASSETS } from "@/constants";

const communityForums = [
  {
    name: "UV MAIN - CETA Student Exclusives",
    members: "100K",
  },
  {
    name: "UV Lancers",
    members: "50K",
  },
  {
    name: "UV CETA - Computer Studies",
    members: "5k",
  },
];

export const CommunityForumsList: React.FC<{ limit?: number | null }> = ({
  limit = null,
}) => {
  const displayedForums = limit
    ? communityForums.slice(0, limit)
    : communityForums;

  return (
    <View className="flex flex-col gap-5 mt-5">
      {displayedForums.map((cf) => (
        <View
          key={cf.name}
          className="bg-white flex flex-row items-center rounded-xl gap-3 py-3 px-4"
        >
          <Image
            source={ASSETS.SCHOOL_LOGO}
            className="w-10 h-10 rounded-full"
          />
          <View className="flex flex-col">
            <Text className="text-base font-medium">{cf.name}</Text>
            <Text className="text-md text-gray-500">{cf.members} members</Text>
          </View>
        </View>
      ))}
    </View>
  );
};
