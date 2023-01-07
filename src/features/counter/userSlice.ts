import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiCall } from "../../app/hooks";

export interface UserState {
  value: [];
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  value: [],
  status: "idle",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(userAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const userAsync = createAsyncThunk("user/userDetails", async () => {
  try {
    const response = await ApiCall.get("users");
    return response.data;
  } catch (err) {
    return err;
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(userAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userAsync.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(userAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default userSlice.reducer;