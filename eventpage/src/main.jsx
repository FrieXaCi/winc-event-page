// imports form libraries
// react
import React from 'react';
// react-dom/client
import ReactDOM from 'react-dom/client';
// react-router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// imports from files
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

import {
  UpdateEvent,
  loader as editEventLoader,
  action as editEvent,
} from './components/EventHelpers/UpdateEvent';

import { ErrorPage } from './components/EventHelpers/ErrorPage';

// ui
import { Root } from './components/Root';
//css
import './styles/main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElementlement: <ErrorPage />,
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
        errorElement: <ErrorPage />,
        // action: addComment,
      },
      {
        path: '/event/new',
        element: <NewEvent />,
        loader: newEventLoader,
        action: addNewEvent,
        errorElementlement: <ErrorPage />,
      },

      {
        path: '/event/:eventId/update',
        element: <UpdateEvent />,
        loader: editEventLoader,
        action: editEvent,
        errorElementlement: <ErrorPage />,
      },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
