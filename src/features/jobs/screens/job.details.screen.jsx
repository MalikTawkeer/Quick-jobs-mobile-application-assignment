import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import SafeArea from "../../../components/safe.area.comp";

const JobDetails = ({ route }) => {
  const { job } = route.params;

  console.log(job);

  return (
    <SafeArea>
      <ScrollView>
        <View style={styles.container}>
          {/* Job Role */}
          <Text style={styles.jobRole}>{job?.job_role}</Text>

          {/* Job Details */}
          <View style={styles.detailRow}>
            <MaterialIcons name="location-on" size={18} color="#555" />
            <Text style={styles.detailsText}>
              {job?.primary_details?.Place || "Location not specified"}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <FontAwesome5 name="clock" size={16} color="#555" />
            <Text style={styles.detailsText}>
              {job?.job_hours || "Job hours not mentioned"}
            </Text>
          </View>

          {/* Other Details */}
          {job?.other_details && (
            <View style={styles.otherDetailsContainer}>
              <Text style={styles.otherDetailsText}>{job?.other_details}</Text>
            </View>
          )}

          {/* Salary Details */}
          <View style={styles.salaryContainer}>
            <View style={styles.salaryItem}>
              <FontAwesome5 name="money-bill-wave" size={18} color="#007bff" />
              <Text style={styles.salaryText}>
                Min: {job?.salary_min || "N/A"}
              </Text>
            </View>
            <View style={styles.salaryItem}>
              <FontAwesome5 name="money-bill-wave" size={18} color="#007bff" />
              <Text style={styles.salaryText}>
                Max: {job?.salary_max || "N/A"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 10,
  },
  jobRole: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  detailsText: {
    fontSize: 16,
    color: "#555",
    marginLeft: 6,
  },
  otherDetailsContainer: {
    padding: 12,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    marginTop: 10,
  },
  otherDetailsText: {
    fontSize: 15,
    color: "#444",
  },
  salaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  salaryItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  salaryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#007bff",
    marginLeft: 6,
  },
});

export default JobDetails;
