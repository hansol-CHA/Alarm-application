import { useDispatch } from "react-redux";
import { deleteAlarm, toggleAlarm } from "../features/alarmSlice";

export default function AlarmList ({ info }) {
  const { id, time, message } = info;
  const timeFormat = time.substring(10, 16)
  const dispatch = useDispatch();

  const handleAlarmDelete = () => {
    dispatch(deleteAlarm(id));
  }

  const handleAlarmToggle = () => {
    dispatch(toggleAlarm(id));
  }

  return (
    <div>
      <div className="alarm-detail">{`${timeFormat} ${message}`}</div>
      <button className="alarm-btn" onClick={handleAlarmToggle}>끄기</button>
      <button className="alarm-btn" onClick={handleAlarmDelete}>삭제</button>
    </div>
  )
}