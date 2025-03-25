import React from "react";
import { View, Text, Pressable } from "react-native";
import { MoveRight } from "lucide-react-native";

export const AccountSettings: React.FC = () => {
  return (
    <View className="flex border-b border-gray-200 py-6">
      <Text className="text-xl font-bold mb-2">Account Settings</Text>

      <View className="flex flex-col gap-4">
        <Pressable className="flex flex-row items-center gap-4">
          <Text className="text-blue-700">Change Password</Text>
          <MoveRight size={18} />
        </Pressable>
        <Pressable className="flex flex-row items-center gap-4">
          <Text className="text-blue-700">Manage Linked Accounts</Text>
          <MoveRight size={18} />
        </Pressable>
      </View>
    </View>
  );
};
