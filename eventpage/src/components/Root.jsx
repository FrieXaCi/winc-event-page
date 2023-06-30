import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
// components/ ui
import { Navigation } from './ui/Navigation';
import { Header } from './ui/Header';
import { Footer } from './ui/Footer';
// components/oi
import { sendRequest } from './oi/Api';

export const loader = async () => {
  const users = await sendRequest('users', 'GET', null);
  const categories = await sendRequest('categories', 'GET', null);

  return { users, categories };
};

export const Root = () => {
  const { users, categories } = useLoaderData();

  return (
    <div className="root-container">
      <Header />
      <Navigation />
      <Outlet context={{ users, categories }} />
      <Footer />
    </div>
  );
};
