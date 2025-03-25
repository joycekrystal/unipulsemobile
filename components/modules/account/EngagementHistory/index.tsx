import React from "react";
import { View, Text } from "react-native";

export const EngagementHistory: React.FC = () => {
  return (
    <View className="flex border-b border-gray-200 py-6">
      <Text className="text-xl font-bold mb-8">EngagementHistory</Text>

      <View className="flex flex-col gap-1">
        <Text className="text-md font-medium">Participated Activities</Text>
        <Text className="text-sm text-gray-500">Events Attended</Text>
      </View>
    </View>
  );
};
