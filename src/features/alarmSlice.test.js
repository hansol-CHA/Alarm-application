import alarmReducer, {
  addAlarm,
  deleteAlarm,
  toggleAlarm } from "./alarmSlice";

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

test("should return the initialState", () => {
  let state = alarmReducer(undefined, {});

  expect(state).toEqual(initialState);
});

test("should add new alarm to date", () => {
  let state = alarmReducer(
    initialState,
    addAlarm({
      clockMode: "일반",
      time: "2022-04-28 14:23",
      alarmMode: "긴급",
      message: "테스트",
    })
  );

  expect(state.byId).toHaveProperty("alarm_3.message", "테스트");
});

test("should delete alarm", () => {
  let state = alarmReducer(initialState,
    deleteAlarm("alarm_1"));

  expect(state).toEqual({
    byId: {
      "alarm_2" : {
        id: "alarm_2",
        clockMode: "진동", // "vibrate" "night"
        time: "2022-04-26 22:00",
        alarmMode: "긴급", // "emergency"
        message: "수면 알람",
        activate: true
      }
    },
    allIds: ["alarm_2"],
  });
});

test("should toggle state's property", () => {
  let state = alarmReducer(initialState,
    toggleAlarm("alarm_1"));

    expect(state.byId).toHaveProperty("alarm_1.activate", false);
});
