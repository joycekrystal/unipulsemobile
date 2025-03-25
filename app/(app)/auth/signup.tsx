import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { checkPlatform } from "@/utils";
import { AppLogo, SignupForm } from "@/components";

export default (): JSX.Element => {
  return (
    <KeyboardAvoidingView
      behavior={checkPlatform("ios") ? "padding" : "height"}
      style={{ paddingTop: checkPlatform("ios") ? 80 : 20 }}
      className="flex-1 pt-[80px]"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="w-[90%] mx-auto flex-1 flex-col items-center justify-center">
            <AppLogo small />
            <Text className="text-3xl text-white font-bold mt-2 mb-3">
              Uni-Pulse
            </Text>
            <Text className="text-lg text-white font-bold mb-8">
              Create Account
            </Text>
            <SignupForm />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
