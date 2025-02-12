import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import JobInfoCard from "./job.info.card";
import { useNavigation } from "@react-navigation/native";

const fetchJobs = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `https://testapi.getlokalapp.com/common/jobs?page=${pageParam}`
  );
  return { ...data, nextPage: pageParam + 1 };
};

const JobListing = () => {
  const navigation = useNavigation();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
    getNextPageParam: (lastPage, pages) => {
      const totalFetched = pages.reduce(
        (acc, page) => acc + (page.results?.length || 0),
        0
      );
      return totalFetched < 33 ? lastPage.nextPage : undefined;
    },
  });

  if (isLoading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (isError) return <Text>Failed to load jobs</Text>;

  const jobs =
    data?.pages?.flatMap((page) =>
      page.results?.filter((job) => job.type !== 1040)
    ) || [];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item?.id}
      onPress={() => navigation.navigate("Job Details", { job: item })}
    >
      <JobInfoCard {...item} />
    </TouchableOpacity>
  );

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item?.id.toString()}
        renderItem={renderItem}
        onEndReached={() => {
          if (hasNextPage) fetchNextPage();
        }}
        onEndReachedThreshold={0.1}
        ListFooterComponentStyle={{ paddingBottom: 10 }}
        ListFooterComponent={
          isFetchingNextPage ? (
            <ActivityIndicator size="large" color="tomato" />
          ) : null
        }
      />
    </View>
  );
};

export default JobListing;
