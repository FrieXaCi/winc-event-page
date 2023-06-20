import React from 'react';
import { Outlet } from 'react-router-dom';
// components/ ui
import { Navigation } from './ui/Navigation';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';

export const Root = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};
