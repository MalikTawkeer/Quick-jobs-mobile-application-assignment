import React from "react";
import { StatusBar } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const SafeArea = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // marginTop: StatusBar.currentHeight,
        backgroundColor: "whitesmoke",
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;
