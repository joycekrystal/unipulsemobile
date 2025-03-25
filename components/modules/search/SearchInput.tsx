import React from "react";
import { View, TextInput } from "react-native";
import { Search } from "lucide-react-native";

export const SearchInput: React.FC = () => {
  return (
    <View className="flex-row items-center w-full h-[40px] rounded-full bg-white px-4">
      <Search size={20} color="#000" />
      <TextInput
        className="flex-1 ml-2 text-md text-gray-500"
        placeholder="Search"
        placeholderTextColor="#666"
        autoCapitalize="none"
      />
    </View>
  );
};
