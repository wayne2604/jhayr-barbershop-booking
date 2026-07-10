import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './bookingSlice';

const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
  devTools: import.meta.env.DEV,
});

export default store;
