import React from "react";
import { View, Text } from "react-native";
import { AppSwitch } from "@/components/app";

type NotificationsSettingsType = {
  announcements: boolean;
  events: boolean;
  directMessages: boolean;
};

export const NotificationPreferences: React.FC = () => {
  const [notifications, setNotifications] =
    React.useState<NotificationsSettingsType>({
      announcements: false,
      events: false,
      directMessages: false,
    });

  const toggleValue = (key: keyof NotificationsSettingsType) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key],
    });
  };

  return (
    <View className="border-t border-b border-gray-200 py-6">
      <Text className="text-xl font-bold mb-3">Notification Preferences</Text>

      <View className="flex flex-col gap-4">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-md font-medium">Announcements</Text>
          <AppSwitch
            value={notifications.announcements}
            onValueChange={() => toggleValue("announcements")}
          />
        </View>
        <View className="flex flex-row justify-between items-center">
          <Text className="text-md font-medium">Events</Text>
          <AppSwitch
            value={notifications.events}
            onValueChange={() => toggleValue("events")}
          />
        </View>
        <View className="flex flex-row justify-between items-center">
          <Text className="text-md font-medium">Direct Messages</Text>
          <AppSwitch
            value={notifications.directMessages}
            onValueChange={() => toggleValue("directMessages")}
          />
        </View>
      </View>
    </View>
  );
};
