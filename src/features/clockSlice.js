import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale('ko')

const initialState = {
  currentTime: dayjs().format("YYYY-MM-DD HH:mm dddd"),
}

const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    clockTick: (state, { payload }) => {
      const newTime = payload;

      state.currentTime = newTime;
    }
  }
})

export default clockSlice.reducer;
export const { clockTick } = clockSlice.actions;
