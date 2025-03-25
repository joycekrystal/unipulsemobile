import React from "react";
import { View, TextInput, Text, type TextInputProps } from "react-native";

export const AppTextInput: React.FC<
  { title?: string; error?: string } & TextInputProps
> = ({ title, error, ...props }) => {
  return (
    <View className="flex flex-col gap-3 w-full">
      {title ? <Text className="text-sm text-white">{title}</Text> : null}

      <View>
        <TextInput
          className="w-full bg-white rounded-2xl placeholder:text-gray-400 py-4 px-3"
          {...props}
          autoCapitalize="none"
        />
        {error ? (
          <Text className="text-red-400 text-sm mt-1">{error}</Text>
        ) : null}
      </View>
    </View>
  );
};
