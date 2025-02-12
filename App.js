import { StatusBar } from "expo-status-bar";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Navigation } from "./src/infrastructure";
import { BookmarkProvider } from "./src/contexts/bookmarks.context";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BookmarkProvider>
        <Navigation />
      </BookmarkProvider>

      <StatusBar />
    </QueryClientProvider>
  );
}
