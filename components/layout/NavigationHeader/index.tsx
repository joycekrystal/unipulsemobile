import React from "react";
import { Bell } from "lucide-react-native";
import { View, Text, Pressable, Image } from "react-native";
import { useAuth } from "@/hooks";
import { MyAccountModal } from "@/components/modules";
import { ASSETS } from "@/constants";

export const NavigationHeader: React.FC = () => {
  const {
    authUserData: { authUser },
  } = useAuth();
  const [profileModal, setProfileModal] = React.useState<boolean>(false);

  const handleCloseModal = () => {
    setProfileModal(false);
  };

  const handleOpenModal = () => {
    setProfileModal(true);
  };

  return (
    <>
      <MyAccountModal open={profileModal} handleClose={handleCloseModal} />
      <View className="flex flex-row justify-between w-full py-3">
        <Pressable onPress={handleOpenModal}>
          <View className="flex flex-row gap-2 items-center">
            <Image
              source={ASSETS.SCHOOL_LOGO}
              className="h-[32px] w-[32px]"
              resizeMethod="resize"
              resizeMode="contain"
            />
            <Text className="text-[15px] text-gray-600 font-medium">
              Hello, {authUser?.firstName} {authUser?.lastName} -{" "}
              {authUser?.studentCourse} {authUser?.studentYearLevel}
            </Text>
          </View>
        </Pressable>

        <Pressable>
          <Bell color="#333333" />
        </Pressable>
      </View>
    </>
  );
};
