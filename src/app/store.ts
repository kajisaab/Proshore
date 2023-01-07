import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "../features/counter/userSlice";
import repoReducer from "../features/repos/repoSlice";
import userRepoReducer from "../features/userRepo/userRepoSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    repo: repoReducer,
    userRepo: userRepoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
