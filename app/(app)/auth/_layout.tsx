import { View } from "react-native";
import { Slot } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default (): JSX.Element => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        marginTop: -insets.top,
        marginBottom: -insets.bottom,
      }}
      className="flex-1 w-full relative"
    >
      <Slot />
    </View>
  );
};
