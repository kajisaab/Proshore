import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiCall } from "../../app/hooks";

export interface RepoState {
  repo: [];
  status: "idle" | "loading" | "failed";
}

const initialState: RepoState = {
  repo: [],
  status: "idle",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(repoAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

interface Props {
  name: string;
  per_page: number;
  page: number;
  direction: string;
  type: string;
  sort: string;
}

export const repoAsync = createAsyncThunk(
  "user/repoDetails",
  async (props: Props) => {
    try {
      const response = await ApiCall.get(`users/${props.name}/repos`, {
        params: {
          type: props.type,
          sort: props.sort,
          direction: props.direction,
          per_page: props.per_page,
          page: props.page,
        },
      });
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

export const repoSlice = createSlice({
  name: "repo",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(repoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(repoAsync.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = "idle";
        state.repo = action.payload;
      })
      .addCase(repoAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default repoSlice.reducer;
