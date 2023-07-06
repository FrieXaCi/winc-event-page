import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/events">
            <button>Events</button>
          </Link>
        </li>
        <li>
          <Link to="/event/New">
            <button>New Event</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
