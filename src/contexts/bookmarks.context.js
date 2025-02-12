import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  // Load bookmarks from AsyncStorage when app starts
  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        const storedBookmarks = await AsyncStorage.getItem("bookmarkedJobs");
        if (storedBookmarks) {
          setBookmarkedJobs(JSON.parse(storedBookmarks));
        }
      } catch (error) {
        console.error("Error loading bookmarks:", error);
      }
    };
    loadBookmarks();
  }, []);

  console.log(bookmarkedJobs);

  // Function to add/remove a bookmark
  const toggleBookmark = async (job) => {
    try {
      let updatedBookmarks;
      const isBookmarked = bookmarkedJobs.some((item) => item.id === job.id);

      if (isBookmarked) {
        // Remove from bookmarks
        updatedBookmarks = bookmarkedJobs.filter((item) => item.id !== job.id);
      } else {
        // Add new bookmark
        updatedBookmarks = [...bookmarkedJobs, job];
      }

      // Update state and AsyncStorage
      setBookmarkedJobs(updatedBookmarks);
      await AsyncStorage.setItem(
        "bookmarkedJobs",
        JSON.stringify(updatedBookmarks)
      );
    } catch (error) {
      console.error("Error updating bookmarks:", error);
    }
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedJobs, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
