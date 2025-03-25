import { View, Text, ScrollView } from "react-native";
import { SearchInput, CommunityForumsList } from "@/components";

export default (): JSX.Element => {
  return (
    <View className="flex-1 px-5 py-2">
      <Text className="text-2xl font-bold mt-4">Forums</Text>

      <View className="flex-1 text-center mt-7">
        <SearchInput />

        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1 mt-2"
        >
          <CommunityForumsList />
        </ScrollView>
      </View>
    </View>
  );
};
