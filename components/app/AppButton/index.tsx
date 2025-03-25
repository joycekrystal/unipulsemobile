import React from "react";
import {
  Pressable,
  Text,
  ActivityIndicator,
  type PressableProps,
} from "react-native";

export const AppButton: React.FC<
  {
    title: string;
    className?: string;
    titleClassName?: string;
    loading?: boolean;
  } & PressableProps
> = ({ title, className, titleClassName, loading, ...buttonProps }) => {
  return (
    <Pressable className={className} disabled={loading} {...buttonProps}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text className={titleClassName}>{title}</Text>
      )}
    </Pressable>
  );
};
