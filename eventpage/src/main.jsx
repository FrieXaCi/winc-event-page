import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// pages
import { EventsPage, loader as eventListLoader } from './pages/EventsPage';
import { EventPage, loader as eventLoader } from './pages/EventPage';
// components
// EventHelpers
import {
  NewEvent,
  loader as newEventLoader,
  action as addNewEvent,
} from './components/EventHelpers/NewEvent';
// ui
import { Root } from './components/Root';
//css
import './styles/main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <EventsPage />,
        loader: eventListLoader,
      },
      {
        path: '/event/:eventId',
        element: <EventPage />,
        loader: eventLoader,
        // action: addComment,
      },
      {
        path: '/event/new',
        element: <NewEvent />,
        loader: newEventLoader,
        action: addNewEvent,
      },
    ],
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
