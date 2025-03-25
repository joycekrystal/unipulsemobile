import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  RefreshControl,
} from "react-native";
import { useAnnouncementsService } from "@/services";
import { AnnouncementsItem } from "./AnnouncementItem";
import { type Announcement } from "@/types/models.type";

const EmptyListBanner = ({ onRefresh }: { onRefresh: () => void }) => {
  return (
    <View className="w-full h-[200px] flex flex-col items-center justify-center">
      <Text className="text-gray-600">No data available</Text>
      <Pressable onPress={onRefresh}>
        <Text className="text-sm text-blue-500">Refresh</Text>
      </Pressable>
    </View>
  );
};

export const AnnouncementsList: React.FC = () => {
  const { fetchAnnouncements } = useAnnouncementsService();
  const [announcements, setAnnouncements] = React.useState<Announcement[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  const fetchAnnouncementsData = async () => {
    setLoading(true);
    const data = await fetchAnnouncements();
    setAnnouncements(data);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchAnnouncementsData();

    setTimeout(() => {
      setRefreshing(false);
    }, 1200);
  };

  React.useEffect(() => {
    fetchAnnouncementsData();
    return () => setAnnouncements([]);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 !mt-1"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
    >
      <View className="flex flex-col gap-3 !pb-[40px]">
        {!loading && announcements.length === 0 ? (
          <EmptyListBanner onRefresh={handleRefresh} />
        ) : (
          announcements.map((announcement) => (
            <AnnouncementsItem
              key={announcement.id}
              announcement={announcement}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
};
