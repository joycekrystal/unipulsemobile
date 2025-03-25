import { useRouter } from "expo-router";
import { View, Text, Pressable, ScrollView } from "react-native";
import {
  SearchInput,
  AnnouncementBoards,
  CommunityForumsList,
} from "@/components";

export default (): JSX.Element => {
  const router = useRouter();

  const handleViewAllForums = () => {
    router.push("/(app)/home/forums");
  };

  return (
    <View className="flex-1 px-5 py-2">
      <Text className="text-2xl font-bold mt-4">Explore</Text>

      <View className="flex-1 text-center mt-7">
        <SearchInput />

        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          <View className="flex-1 flex-col gap-10">
            <View className="flex-1">
              <Text className="text-lg font-bold mt-5 mb-2">Events Board</Text>
              <AnnouncementBoards />
            </View>

            <View className="flex-1">
              <View className="flex flex-row justify-between items-center">
                <Text className="text-lg font-bold">Community Forums</Text>

                <Pressable onPress={handleViewAllForums}>
                  <Text className="text-green-500">See All</Text>
                </Pressable>
              </View>

              <CommunityForumsList />
            </View>

            <View className="flex-1">
              <View className="flex flex-row justify-between items-center">
                <Text className="text-lg font-bold">Student Toolkits</Text>

                <Pressable>
                  <Text className="text-green-500">See All</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
