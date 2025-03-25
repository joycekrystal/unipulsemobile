import { Alert } from "react-native";
import { useApi } from "@/hooks";
import {
  type FetchAnnouncementsApiResponse,
  type CreateAnnouncementsApiResponse,
} from "@/types/responses.type";
import { type Announcement } from "@/types/models.type";

export const useAnnouncementsService = () => {
  const { $baseApi } = useApi();

  const fetchAnnouncements = async () => {
    const response = await $baseApi.get<FetchAnnouncementsApiResponse>(
      "/announcements"
    );

    return response.data;
  };

  const createAnnouncement = async (
    announcement: Announcement,
    resetForm: () => void
  ) => {
    const response = await $baseApi.post<CreateAnnouncementsApiResponse>(
      "/announcements",
      announcement
    );

    if (response.status === 201) {
      Alert.alert("Success", "Announcement uploaded successfully", [
        {
          text: "OK",
          onPress: () => resetForm(),
        },
      ]);
    }
  };

  return {
    fetchAnnouncements,
    createAnnouncement,
  };
};
