import React from "react";
import { useRouter } from "expo-router";
import { View, Pressable } from "react-native";
import { House, Search, Plus, MessageCircle, User } from "lucide-react-native";
import { useAuth } from "@/hooks";
import { MyAccountModal, AnnouncementFormModal } from "@/components/modules";

type ModalsState = {
  profile: boolean;
  announcement: boolean;
};

const ICON_SIZE = 28;

export const NavigationFooter: React.FC = () => {
  const router = useRouter();
  const { isCurrentUserAdmin } = useAuth();
  const [active, setActive] = React.useState<string>("home");
  const [modals, setModals] = React.useState<ModalsState>({
    profile: false,
    announcement: false,
  });

  const handleModal = (modal: keyof ModalsState, isOpen: boolean) => {
    setModals((prev) => ({ ...prev, [modal]: isOpen }));
  };

  const handleCloseModals = () => {
    setModals({ profile: false, announcement: false });
  };

  const checkActive = (path: string) => {
    return active === path ? "blue" : "green";
  };

  const handleItemPress = (path: any, key: string) => {
    setActive(key);
    router.push(path);
  };

  return (
    <>
      <MyAccountModal open={modals.profile} handleClose={handleCloseModals} />
      <AnnouncementFormModal
        open={modals.announcement}
        handleClose={handleCloseModals}
      />

      <View className="h-16 w-[85%] flex flex-row justify-between items-center bg-white rounded-full shadow-sm !px-[20px]">
        <Pressable
          onPress={() => handleItemPress("/(app)/home/overview", "home")}
        >
          <House size={ICON_SIZE} color={checkActive("home")} />
        </Pressable>
        <Pressable
          onPress={() => handleItemPress("/(app)/home/explore", "explore")}
        >
          <Search size={ICON_SIZE} color={checkActive("explore")} />
        </Pressable>
        {isCurrentUserAdmin() ? (
          <Pressable
            className="h-[40px] w-[40px] bg-green-900 border rounded-full justify-center items-center"
            onPress={() => handleModal("announcement", true)}
          >
            <Plus size={ICON_SIZE} color="#fff" />
          </Pressable>
        ) : null}
        <Pressable
          onPress={() => handleItemPress("/(app)/home/forums", "forums")}
        >
          <MessageCircle size={ICON_SIZE} color={checkActive("forums")} />
        </Pressable>
        <Pressable onPress={() => handleModal("profile", true)}>
          <User size={ICON_SIZE} color={checkActive("profile")} />
        </Pressable>
      </View>
    </>
  );
};
