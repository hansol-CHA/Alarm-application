import dayjs from "dayjs";
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { checkAlarm } from "./utils/utils";
import { clockTick } from "../features/clockSlice";
import { openModal } from "../features/modalSlice";

import Modal from '../common/Modal';
import { MODAL_TYPES } from "../features/constant";

export default function TimeDisplay () {
  const nowTime = useSelector(state => state.clock.currentTime);
  const alarmList = useSelector(state => state.alarm.byId);
  const modalIsOpen = useSelector(state => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime =  dayjs().format("YYYY-MM-DD HH:mm dddd");
      dispatch(clockTick(newTime));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch])

  const checkAlarmTime = checkAlarm(alarmList, nowTime.substring(0, 16));

  useEffect(() => {
    if (checkAlarmTime) {
      if (checkAlarmTime.clockMode === "야간" && checkAlarmTime.alarmMode === "일반") return;
      dispatch(openModal(MODAL_TYPES.ALARM))
    }
  }, [dispatch, checkAlarmTime])

  return (
    <>
      <div className='time-container'>
        <div className="nowTime">{nowTime}</div>
      </div>
      {modalIsOpen === MODAL_TYPES.ALARM && <Modal alarmInfo={checkAlarmTime}/>}
    </>
  )
}
