import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import AlarmList from "../common/AlarmList"
import TimeDisplay from '../common/TImeDisplay';
import AlarmSetting from "../common/AlarmSetting"

function App() {
  const alarmList = useSelector(state => state.alarm.byId);

  return (
    <div className="App">
      <h2>Alarm Clock</h2>
      <TimeDisplay />
      <AlarmSetting />
      <div className='list'>
        <h3>알람목록</h3>
        {Object.values(alarmList).sort((a,b) => {
          return a.time < b.time ? -1 : a.time > b.time ? 1 : 0;
        }).map(alarm => (
          <AlarmList key={alarm.id} info={alarm} /> ))}
      </div>
    </div>
  );
}

export default App;
