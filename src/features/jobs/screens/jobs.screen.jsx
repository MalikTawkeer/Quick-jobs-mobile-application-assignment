import React from "react";
import { Text, View } from "react-native";

import SafeArea from "../../../components/safe.area.comp.jsx";
import JobListing from "../components/job.listing.component.jsx";

const Jobs = () => {
  return (
    <SafeArea>
      <View>
        <JobListing />
      </View>
    </SafeArea>
  );
};

export default Jobs;
