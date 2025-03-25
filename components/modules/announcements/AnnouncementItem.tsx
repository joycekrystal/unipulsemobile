import React from "react";
import dayjs from "dayjs";
import { View, Text, Image, Pressable } from "react-native";
import { BadgeCheck } from "lucide-react-native";
import { AnnouncementViewModal } from "./AnnouncementViewModal";
import { ASSETS } from "@/constants";
import { type Announcement } from "@/types/models.type";

export const AnnouncementsItem: React.FC<{
  announcement: Announcement;
}> = (props) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const formatPostedDate = (date: string) => {
    return dayjs(date).format("MMMM DD, YYYY");
  };

  return (
    <>
      <AnnouncementViewModal
        announcement={props.announcement}
        open={modalOpen}
        handleClose={handleCloseModal}
      />

      <Pressable onPress={handleOpenModal}>
        <View className="flex flex-col gap-5 bg-white rounded-xl shadow-xs p-4">
          <View className="flex flex-row gap-2 items-center ">
            <Image
              source={ASSETS.SCHOOL_LOGO}
              className="h-[32px] w-[32px]"
              resizeMethod="resize"
              resizeMode="contain"
            />
            <View className="flex flex-col gap-1">
              <Text className="text-[14px] font-bold">
                {props.announcement.headline}
              </Text>
              <Text className="text-sm text-gray-500">@UVCETA</Text>
            </View>
          </View>

          {props.announcement.image && (
            <View className="w-full h-[280px] bg-slate-100 !rounded-xl relative">
              <Image
                source={{ uri: props.announcement.image }}
                className="w-full h-full object-cover rounded-xl"
              />

              <View className="flex flex-row items-center gap-1 bg-slate-100 rounded-full absolute bottom-2 right-1 p-1 pr-2">
                <BadgeCheck color="green" size={18} className="mt-2" />
                <Text className="text-xs">Authenticity Verified</Text>
              </View>
            </View>
          )}

          <Text className="text-[14px] text-gray-500">
            {props.announcement.body}
          </Text>

          <Text className="text-sm text-right">
            {formatPostedDate(props.announcement.createdAt as string)}
          </Text>
        </View>
      </Pressable>
    </>
  );
};
