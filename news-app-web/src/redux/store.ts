import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "@/redux/slices/newsSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
