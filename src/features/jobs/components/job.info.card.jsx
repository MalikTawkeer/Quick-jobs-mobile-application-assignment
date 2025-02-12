import React, { useContext } from "react";
import { View, Text } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import BookmarkButton from "../../../components/bookmark.button.component";

const JobInfoCard = ({
  id = "",
  title = "",
  primary_details = {},
  salary_min = "",
  salary_max = "",
}) => {
  const jobDetail = { id, title, primary_details, salary_min, salary_max };

  return (
    <View style={styles.cardContainer}>
      <View style={{ alignItems: "flex-end" }}>
        <BookmarkButton job={jobDetail} />
      </View>

      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title}</Text>

      <View style={styles.row}>
        <FontAwesome5
          name="rupee-sign"
          size={15}
          color="green"
          style={styles.icon}
        />
        <Text style={styles.text}>
          {salary_min} - {salary_max}
        </Text>
      </View>

      <View style={styles.row}>
        <FontAwesome
          name="map-marker"
          size={20}
          color="red"
          style={styles.icon}
        />
        <Text style={styles.text}>{primary_details?.Place || "-"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    marginHorizontal: 5,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    marginLeft: 5,
  },
  icon: { marginRight: 5 },
  text: { fontSize: 14, fontWeight: "bold", color: "#333" },
});

export default JobInfoCard;
