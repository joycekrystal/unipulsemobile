import React from "react";
import Checkbox from "expo-checkbox";
import { View, Text } from "react-native";

export const AppCheckbox: React.FC<{
  isChecked?: boolean;
  title?: string;
  className?: string;
  titleClassName?: string;
}> = ({ isChecked, title, className, titleClassName }) => {
  const [checked, setChecked] = React.useState(isChecked ?? false);

  const handleToggleChecked = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <View className="flex flex-row gap-2">
      <Checkbox
        className={className}
        value={checked}
        onValueChange={setChecked}
      />
      {title ? (
        <Text className={titleClassName} onPress={handleToggleChecked}>
          {title}
        </Text>
      ) : null}
    </View>
  );
};
