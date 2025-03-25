import ToastManager from "react-native-toast-alert";
import * as SplashScreen from "expo-splash-screen";
import { View, Text, ImageBackground } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ASSETS } from "@/constants";
import "@/app.css";

SplashScreen.hideAsync();

export default (): JSX.Element => {
  const insets = useSafeAreaInsets();

  return (
    <GestureHandlerRootView>
      <View
        style={{
          marginTop: -insets.top,
          marginBottom: -insets.bottom,
        }}
        className="flex-1 relative"
      >
        <ImageBackground
          className="flex-1 justify-center items-center relaove"
          resizeMode="cover"
          source={ASSETS.AUTH_BG}
        >
          <StatusBar style="light" />
          <ToastManager />
          <Slot />

          <Text className="text-sm text-slate-200 absolute bottom-10 left-5">
            App v1.0.0.1(beta)
          </Text>
        </ImageBackground>
      </View>
    </GestureHandlerRootView>
  );
};
