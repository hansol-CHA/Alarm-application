import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import alarmReducer from "../features/alarmSlice";
import modalReducer from "../features/modalSlice";
import clockReducer from "../features/clockSlice";

const rootReducer = combineReducers({
  alarm: alarmReducer,
  clock: clockReducer,
  modal: modalReducer,
})

export const store = configureStore({
  reducer: rootReducer
});
