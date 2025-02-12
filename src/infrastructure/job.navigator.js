import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import JobsScreen from "../features/jobs/screens/jobs.screen.jsx";
import JobDetailsScreen from "../features/jobs/screens/job.details.screen.jsx";

const Stack = createStackNavigator();

const JobsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Job" component={JobsScreen} />

      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="Job Details"
        component={JobDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default JobsNavigator;
