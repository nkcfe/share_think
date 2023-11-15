import articleReducer from "../modules/articleReducer";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../modules/userReducer";

const store = configureStore({
  reducer: {
    userReducer: userReducer,
    articleReducer: articleReducer,
  },
});

export default store;
