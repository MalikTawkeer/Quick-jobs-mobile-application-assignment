import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import JobsScreen from "../features/jobs/screens/jobs.screen.jsx";
import BookmarksScreen from "../features/bookmarks/screens/bookmarks.screen.jsx";

import JobsNavigator from "./job.navigator.js";

const Tabs = createBottomTabNavigator();

// DEFINE TAB ICONS
const TAB_ICONS = {
  Jobs: "briefcase",
  Bookmarks: "bookmarks",
};

// SCREEN OPTIONS
const screenOptions = ({ route }) => {
  const ICON_NAME = TAB_ICONS[route.name];
  return {
    tabBarIcon: ({ color, size }) => (
      <Ionicons name={ICON_NAME} color={color} size={size} />
    ),
    tabBarInactiveTintColor: "gray",
    tabBarActiveTintColor: "tomato",
    tabBarStyle: {
      backgroundColor: "white", // Tab bar background color
      borderTopWidth: 0, // Remove top border
      height: 60, // Tab bar height
      shadowColor: "#000", // Shadow color
      shadowOpacity: 0.1, // Shadow opacity
      shadowOffset: { width: 0, height: -2 }, // Shadow offset
      shadowRadius: 5, // Shadow radius
      elevation: 5, // For Android shadow
    },
    tabBarLabelStyle: {
      fontWeight: "bold", // Label font weight
      // textTransform: "capitalize", // Capitalize text
    },
    tabBarItemStyle: {
      // paddingVertical: 5, // Vertical padding for each tab
    },
    headerShown: false, // Hide the header
  };
};

export const AppNavigator = ({}) => {
  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen name="Jobs" component={JobsNavigator} />
      <Tabs.Screen name="Bookmarks" component={BookmarksScreen} />
    </Tabs.Navigator>
  );
};
