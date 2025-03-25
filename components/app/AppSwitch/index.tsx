import React from "react";
import { Switch, type SwitchProps } from "react-native";

export const AppSwitch: React.FC<SwitchProps> = (props) => {
  return <Switch {...props} />;
};
