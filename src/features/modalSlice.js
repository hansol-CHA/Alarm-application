import { createSlice } from '@reduxjs/toolkit';

import { MODAL_TYPES } from './constant';

const initialState = MODAL_TYPES.NONE;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      const modalType = payload;
      state = MODAL_TYPES[modalType];
    },
    closeModal: (state) => {
      state = MODAL_TYPES.NONE;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
