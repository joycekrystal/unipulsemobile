import React from "react";
import dayjs from "dayjs";
import { View, Text, Pressable, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import { X as CloseIcon } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { type Announcement } from "@/types/models.type";

export const AnnouncementViewModal: React.FC<{
  announcement: Announcement;
  open: boolean;
  handleClose: () => void;
}> = (props) => {
  const insets = useSafeAreaInsets();

  const formatPostedDate = (date: string) => {
    return dayjs(date).format("MMMM DD, YYYY");
  };

  return (
    <>
      <StatusBar style="dark" />
      <View className="flex-1 items-center justify-center bg-gray-100">
        <Modal
          animationType="slide"
          transparent={false}
          visible={props.open}
          onRequestClose={() => props.handleClose()}
        >
          <View
            className="flex-1"
            style={{
              marginTop: insets.top,
              marginBottom: insets.bottom,
            }}
          >
            <View className="flex flex-col p-5">
              <View className="flex flex-row justify-between">
                <View className="flex flex-col gap-y-1">
                  <Text className="text-3xl font-bold">View Announcement</Text>
                  <Text className="text-md text-black mb-9">
                    {formatPostedDate(props.announcement.createdAt as string)}
                  </Text>
                </View>
                <Pressable onPress={props.handleClose}>
                  <CloseIcon color="#222" />
                </Pressable>
              </View>

              <View className="flex flex-col gap-2 mt-10">
                <View className="flex flex-col gap-1">
                  <Text className="text-sm text-gray-400">Headline</Text>
                  <Text className="text-2xl font-medium">
                    {props.announcement.headline}
                  </Text>
                </View>

                <View className="flex flex-col gap-1">
                  {props.announcement.image ? (
                    <View className="w-full h-[280px] bg-slate-200 !rounded-xl relative" />
                  ) : null}
                </View>

                <View className="flex flex-col gap-1">
                  <Text className="text-sm text-gray-400">Content</Text>
                  <Text
                    className="text-md text-gray-600 font-medium"
                    style={{ lineHeight: 25 }}
                  >
                    {props.announcement.body}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};
