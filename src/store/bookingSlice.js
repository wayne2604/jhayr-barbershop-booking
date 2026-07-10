import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  selectedService: null,
  selectedBarber: null,
  selectedTime: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.selectedBarber = null;
      state.selectedTime = null;
    },
    setService(state, action) {
      state.selectedService = action.payload;
    },
    setBarber(state, action) {
      state.selectedBarber = action.payload;
    },
    setTime(state, action) {
      state.selectedTime = action.payload;
    },
    resetBooking(state) {
      Object.assign(state, initialState);
    },
    confirmBooking(state) {
      // In production this would trigger an API call via a thunk.
      // For now, reset state and close modal after confirmation.
      Object.assign(state, initialState);
    },
  },
});

export const {
  openModal,
  closeModal,
  setService,
  setBarber,
  setTime,
  resetBooking,
  confirmBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
