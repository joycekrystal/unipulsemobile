import { View } from "react-native";
import { Slot } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationFooter } from "@/components";

export default (): JSX.Element => {
  const insets = useSafeAreaInsets();

  return (
    <View className="w-full h-full !bg-slate-100">
      <View
        className="flex-1 w-full h-full relative"
        style={{
          marginTop: insets.top,
          marginBottom: insets.bottom,
        }}
      >
        <Slot />

        <View className="flex justify-center items-center fixed bottom-0">
          <NavigationFooter />
        </View>
      </View>
    </View>
  );
};
