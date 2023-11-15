import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../axios/api";

const initialState = {
  user: [],
  token: null,
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const __loginUser = createAsyncThunk(
  "loginUser",
  async (payload, thunkApi) => {
    try {
      const response = await api.post("login", payload);
      return thunkApi.fulfillWithValue({
        user: payload,
        token: response.data.token,
      });
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const __registerUser = createAsyncThunk(
  "registerUser",
  async (payload, thunkApi) => {
    try {
      const response = await api.post("register", payload);
      if (response.state === 201) {
        __loginUser(payload);
      }

    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);

export const __logoutUser = createAsyncThunk(
  
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [__loginUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
