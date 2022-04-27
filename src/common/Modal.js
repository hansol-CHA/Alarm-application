import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";

import { closeModal } from "../features/modalSlice";
import { AlarmIcon, VibrateIcon } from "../icons";

export default function Modal ({ alarmInfo }) {
  const element = document.getElementById('modal');
  const dispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(closeModal());
  }

  return ReactDOM.createPortal(
    <aside className='modal-container'>
      <div className='modal'>
        <h4> {alarmInfo.message} </h4>
        {alarmInfo.clockMode === "일반" && <AlarmIcon />}
        {alarmInfo.clockMode === "진동" && <VibrateIcon />}
        {alarmInfo.clockMode === "야간" && <AlarmIcon />}
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={handleModalClose}
          >
            confirm
          </button>
        </div>
      </div>
    </aside>
  , element);
};
