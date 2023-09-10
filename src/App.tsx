import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home'
import Rpg from './pages/Rpg/Rpg'
import './scss/app.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/rpg" element={<Rpg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
