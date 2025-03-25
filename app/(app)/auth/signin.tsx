import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { checkPlatform } from "@/utils";
import { AppLogo, SigninForm } from "@/components";

export default (): JSX.Element => {
  return (
    <KeyboardAvoidingView
      behavior={checkPlatform("ios") ? "padding" : "height"}
      style={{ paddingTop: checkPlatform("ios") ? 80 : 20 }}
      className="flex-1 pt-[80px]"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="w-[90%] mx-auto flex-1 flex-col items-center justify-center gap-10">
            <AppLogo />
            <Text className="text-3xl text-white font-bold mb-8">
              Uni-Pulse
            </Text>
            <SigninForm />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
