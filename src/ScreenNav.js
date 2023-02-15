import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartScreen from './StartScreen.js';
import LoginScreen from './LoginScreen.js';

function ScreenNav() {
  return (
    <Routes>
      <Route exact path="/" element={<StartScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
}

export default ScreenNav;
