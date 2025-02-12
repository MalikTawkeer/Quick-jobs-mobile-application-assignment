import React, { useContext, useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { BookmarkContext } from "../contexts/bookmarks.context";

const BookmarkButton = ({ job }) => {
  const { bookmarkedJobs, toggleBookmark } = useContext(BookmarkContext);
  const [bookmarked, setBookmarked] = useState(false);

  // Update bookmark state when jobs change
  useEffect(() => {
    setBookmarked(bookmarkedJobs.some((item) => item.id === job.id));
  }, [bookmarkedJobs]);

  return (
    <TouchableOpacity
      onPress={() => toggleBookmark(job)}
      style={{ padding: 10 }}
    >
      <FontAwesome
        name={bookmarked ? "bookmark" : "bookmark-o"}
        size={24}
        color={bookmarked ? "gold" : "gray"}
      />
    </TouchableOpacity>
  );
};

export default BookmarkButton;
