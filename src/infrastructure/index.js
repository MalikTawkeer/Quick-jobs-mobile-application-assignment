import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator.js";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};
