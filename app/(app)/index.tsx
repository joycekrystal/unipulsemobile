import React from "react";
import { useRouter } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";
import { AppLogo } from "@/components";
import { useAuth } from "@/hooks";

export default (): JSX.Element => {
  const router = useRouter();
  const { isLoading, redirectHomeIfAuthenticated } = useAuth();

  React.useEffect(() => {
    setTimeout(() => {
      redirectHomeIfAuthenticated();
    }, 1000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <AppLogo className="mb-8" />
      <Text className="text-3xl text-white font-bold mb-8">Uni-Pulse</Text>
      <ActivityIndicator />
    </View>
  );
};
