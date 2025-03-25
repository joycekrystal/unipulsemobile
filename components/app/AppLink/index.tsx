import React from "react";
import { Pressable, Text } from "react-native";

export const AppLink: React.FC<{
  href: string;
  title: string;
  className?: string;
  titleClassName?: string;
}> = ({ href, title, className, titleClassName }) => {
  const handleRedirect = () => {
    console.log(href);
  };

  return (
    <Pressable className={className} onPress={handleRedirect}>
      <Text className={titleClassName}>{title}</Text>
    </Pressable>
  );
};
