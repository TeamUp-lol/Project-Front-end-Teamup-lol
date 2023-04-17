import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClanDetailPresenter from './pages/clanDetailPresenter/ClanDetailPresenter';
import HomePresenter from './pages/homePresenter/HomePresenter';
import LoginPresenter from './pages/loginPage/LoginPage';
import SignUpPage from './pages/signUpPage/SignUpPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePresenter />}></Route>
        <Route path="/login" element={<LoginPresenter />}></Route>
        <Route path="/clanDetail" element={<ClanDetailPresenter />}></Route>
        <Route path="/signUp" element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
