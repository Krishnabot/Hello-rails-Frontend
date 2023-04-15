import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './feature/Greetings/Greeting';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Greeting />} />
    </Routes>
  );
}
