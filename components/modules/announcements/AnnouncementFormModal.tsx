import React from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  ScrollView,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { X as CloseIcon } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { useAnnouncementsService } from "@/services";
import { Announcement } from "@/types/models.type";

export const AnnouncementFormModal: React.FC<{
  open: boolean;
  handleClose: () => void;
}> = (props) => {
  const insets = useSafeAreaInsets();
  const { createAnnouncement } = useAnnouncementsService();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Announcement>();

  const handleFormSubmit = handleSubmit(async (data) => {
    const formResetAndCloseForm = () => {
      reset();
      props.handleClose();
    };

    return await createAnnouncement(data, formResetAndCloseForm);
  });

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
            className="flex-1 relative"
            style={{
              marginTop: insets.top,
              marginBottom: insets.bottom,
            }}
          >
            <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
              <View className="flex flex-col p-5">
                <View className="flex flex-row justify-between">
                  <Text className="text-3xl font-bold">New Post</Text>
                  <Pressable onPress={props.handleClose}>
                    <CloseIcon color="#222" />
                  </Pressable>
                </View>

                <View className="flex flex-col gap-3 mt-10">
                  <View className="flex flex-col gap-1">
                    <Text className="text-sm text-gray-500">Headline</Text>
                    <Controller
                      control={control}
                      name="headline"
                      rules={{ required: "Headline is required" }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                          className="w-full text-sm bg-slate-50 rounded-lg border border-gray-900 py-3 px-3"
                          placeholder="Enter headline title"
                          autoCapitalize="none"
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        />
                      )}
                    />
                    {errors.headline && (
                      <Text className="text-red-500 text-xs">
                        {errors.headline.message}
                      </Text>
                    )}
                  </View>
                  <View className="flex flex-col gap-1">
                    <Text className="text-sm text-gray-500">Body</Text>
                    <Controller
                      control={control}
                      name="body"
                      rules={{
                        required: "Body is required",
                        minLength: {
                          value: 10,
                          message: "Body must be at least 10 characters",
                        },
                      }}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                          className="w-full h-[150px] text-sm bg-slate-50 rounded-lg border border-gray-900 px-3"
                          placeholder="Enter body text"
                          autoCapitalize="none"
                          multiline
                          onBlur={onBlur}
                          onChangeText={onChange}
                          value={value}
                        />
                      )}
                    />
                    {errors.body && (
                      <Text className="text-red-500 text-xs">
                        {errors.body.message}
                      </Text>
                    )}
                  </View>
                </View>
              </View>
            </ScrollView>

            <View className="w-full flex justify-center absolute bottom-5">
              <Pressable
                className="w-[95%] h-[50px] bg-[#1C1B1F] rounded-2xl justify-center mx-auto"
                onPress={handleFormSubmit}
              >
                <Text className="text-md text-white font-bold self-center">
                  Upload Post
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};
