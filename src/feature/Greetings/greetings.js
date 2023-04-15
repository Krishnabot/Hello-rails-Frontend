import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET = './redux/greeting/GET';

const greetingsReducer = (state = '', action) => {
  switch (action.type) {
    case `${GET}/fulfilled`:
      return action.payload.text;
    default:
      return state;
  }
};

const greet = createAsyncThunk(GET, async () => {
  const response = await axios('http://localhost:3000/api/v1/greetings/');
  return response.data;
});

export { greetingsReducer, greet };
