import { createSlice } from "@reduxjs/toolkit";
import { changeTimeFormat } from "../common/utils/utils";

const initialState = {
  byId: {
    "alarm_1" : {
      id: "alarm_1",
      clockMode: "일반", // "vibrate" "night"
      time: "2022-04-26 18:00",
      alarmMode: "일반", // "emergency"
      message: "과제 알람",
      activate: true
    },
    "alarm_2" : {
      id: "alarm_2",
      clockMode: "진동", // "vibrate" "night"
      time: "2022-04-26 22:00",
      alarmMode: "긴급", // "emergency"
      message: "수면 알람",
      activate: true
    }
  },
  allIds: ["alarm_1", "alarm_2"],
}

let alarmId = 3;

const alarmSlice = createSlice({
  name: "alarm",
  initialState,
  reducers: {
    addAlarm: (state, { payload }) => {
      const id = `alarm_${alarmId}`;
      const { clockMode, time, alarmMode, message } = payload;

      state.byId[id] = {
        id: id,
        clockMode,
        time: changeTimeFormat(time),
        alarmMode,
        message,
        activate: true
      }

      state.allIds.push(id);
      alarmId++;
    },
    deleteAlarm: (state, { payload }) => {
      const id = payload;

      delete state.byId[id];
      state.allIds = state.allIds.filter(alarm => alarm !== id);
    },
    toggleAlarm: (state, { payload }) => {
      const id = payload;

      state.byId[id].activate = !state.byId[id].activate;
    },
  }
})

export default alarmSlice.reducer;
export const { addAlarm, deleteAlarm, turnOnAlarm, toggleAlarm } = alarmSlice.actions;