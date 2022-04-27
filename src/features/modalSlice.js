import { createSlice } from '@reduxjs/toolkit';

import { MODAL_TYPES } from './constant';

const initialState = MODAL_TYPES.NONE;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      return payload;
    },
    closeModal: (state) => {
      return MODAL_TYPES.NONE;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
