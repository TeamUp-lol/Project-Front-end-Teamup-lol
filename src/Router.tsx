import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClanDetailPresenter from './pages/clanDetailPresenter/ClanDetailPresenter';
import HomePresenter from './pages/homePresenter/HomePresenter';
import LoginPresenter from './pages/loginPresenter/LoginPresenter';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePresenter />}></Route>
        <Route path="/login" element={<LoginPresenter />}></Route>
        <Route path="/clanDetail" element={<ClanDetailPresenter />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
