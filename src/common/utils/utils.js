export function changeTimeFormat (currentTime) {
  const date = currentTime.substring(0, 10);
  const time = currentTime.substring(11);

  return `${date} ${time}`;
}

export function checkAlarm (alarmList, currentTime) {
  return Object.values(alarmList).find(alarm => {
    if (alarm.time === currentTime && alarm.activate === true) return alarm;

    return false;
  });
}