import React from "react";
import { View, Text, Pressable, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import { X as CloseIcon } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "@/hooks";
import { UserHero } from "./UserHero";
import { NotificationPreferences } from "./NotificationPreferences";
import { AccountSettings } from "./AccountSettings";
import { EngagementHistory } from "./EngagementHistory";

export const MyAccountModal: React.FC<{
  open: boolean;
  handleClose: () => void;
}> = (props) => {
  const insets = useSafeAreaInsets();
  const {
    authUserData: { authUser },
  } = useAuth();

  return (
    <>
      <StatusBar style="dark" />
      <Modal
        animationType="fade"
        transparent={false}
        visible={props.open}
        onRequestClose={() => props.handleClose()}
      >
        <View
          className="flex-1 relative"
          style={{
            marginTop: insets.top,
            marginBottom: insets.bottom,
          }}
        >
          <View className="flex flex-col p-5">
            <View className="flex flex-row justify-between">
              <Text className="text-3xl font-bold">Manage Profile</Text>
              <Pressable onPress={props.handleClose}>
                <CloseIcon color="#222" />
              </Pressable>
            </View>

            <View className="mt-7 mb-[50px]">
              <UserHero user={authUser} />
            </View>

            <View className="flex flex-col">
              <NotificationPreferences />
              <AccountSettings />
              <EngagementHistory />
            </View>
          </View>

          <View className="w-full flex justify-center absolute bottom-5">
            <Pressable className="w-[95%] h-[50px] bg-[#1C1B1F] rounded-2xl justify-center mx-auto">
              <Text className="text-md text-white font-bold self-center">
                Save Changes
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};
