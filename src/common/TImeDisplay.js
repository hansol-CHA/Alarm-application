import dayjs from "dayjs";
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { checkAlarm } from "./utils/utils";
import { clockTick } from "../features/clockSlice";
import { openModal } from "../features/modalSlice";

import Modal from '../common/Modal';

export default function TimeDisplay () {
  const nowTime = useSelector(state => state.clock.currentTime);
  const alarmList = useSelector(state => state.alarm.byId);
  const modalIsOpen = useSelector(state => state.modal.isOpen);
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
      dispatch(openModal())
    }
  }, [dispatch, checkAlarmTime])

  return (
    <>
      <div className='nowTime'>
        현재 시간
        <div>{nowTime}</div>
      </div>
      {modalIsOpen && <Modal alarmInfo={checkAlarmTime}/>}
    </>
  )
}