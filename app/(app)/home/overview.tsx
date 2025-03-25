import { View, Text } from "react-native";
import {
  NavigationHeader,
  AnnouncementsList,
  OrganizationBannersScroll,
  SearchInput,
} from "@/components";

export default (): JSX.Element => {
  return (
    <View className="flex-1 px-5 py-2">
      <NavigationHeader />

      <View className="flex-1 text-center mt-3">
        <SearchInput />

        <View className="flex mt-5 mb-5">
          <OrganizationBannersScroll />
        </View>

        <Text className="text-3xl font-bold">Announcements</Text>
        <AnnouncementsList />
      </View>
    </View>
  );
};
