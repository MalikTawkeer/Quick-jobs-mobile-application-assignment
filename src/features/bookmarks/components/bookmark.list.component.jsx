import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { BookmarkContext } from "../../../contexts/bookmarks.context";
import JobInfoCard from "../../jobs/components/job.info.card";

const BookmarkList = ({ navigation }) => {
  const { bookmarkedJobs } = useContext(BookmarkContext);

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#f8f8f8" }}>
      {bookmarkedJobs.length === 0 ? (
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            color: "gray",
            marginTop: 20,
          }}
        >
          No bookmarked jobs yet.
        </Text>
      ) : (
        <FlatList
          data={bookmarkedJobs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("JobDetails", { jobId: item.id })
              }
            >
              <JobInfoCard {...item} />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default BookmarkList;
