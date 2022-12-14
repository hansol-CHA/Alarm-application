import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addAlarm } from "../features/alarmSlice";

const initialState = {
  clockMode: "일반",
  time: "",
  alarmMode: "일반",
  message: "",
}

export default function AlarmSetting () {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(initialState);
  const { clockMode, time, alarmMode, message } = inputValue;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    })
  };

  const handleAlarmAdd = (e) => {
    e.preventDefault();
    dispatch(addAlarm(inputValue));
    setInputValue(initialState);
  }

  return (
    <div className='addAlarm'>
      <h3>알람등록</h3>
      <form className="alarm-setting">
        <label className='lable'>시계모드:
          <select name="clockMode" value={clockMode} onChange={handleInputChange}>
            <option>일반</option>
            <option>진동</option>
            <option>야간</option>
          </select>
        </label>
        <label className='lable'>시간설정: <input type="datetime-local" name='time' value={time} onChange={handleInputChange}/></label>
        <label className='lable'>알람모드:
          <select name='alarmMode' value={alarmMode} onChange={handleInputChange}>
            <option>일반</option>
            <option>긴급</option>
          </select>
        </label>
        <label className='lable'>내용: <input type="text" name='message' value={message} onChange={handleInputChange}/></label>
      </form>
      <button className="button-addAlarm" onClick={handleAlarmAdd}>내용 추가</button>

    </div>
  )
}
