//importds from libraries
// react-router-dom
import { Outlet, useLoaderData } from 'react-router-dom';
//imports from files
// components/ ui
import { Navigation } from './Navigation';

// components/oi
import { sendRequest } from '../oi/Api';

export const loader = async () => {
  const users = await sendRequest('users', 'GET', null);
  const categories = await sendRequest('categories', 'GET', null);

  return { users, categories };
};

export const EventRoot = () => {
  const { users, categories } = useLoaderData();

  return (
    <div className="event-root-container">
      <Navigation />
      <Outlet context={{ users, categories }} />
    </div>
  );
};
