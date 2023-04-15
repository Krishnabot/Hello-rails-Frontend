import { configureStore } from '@reduxjs/toolkit';
import { greetingsReducer } from './Greetings/greetings';

const store = configureStore({
  reducer: {
    greeting: greetingsReducer,
  },
});

export default store;
