// react
import { useState } from 'react';
// react-router-dom
import { Link, useLoaderData } from 'react-router-dom';
// components /oi/ api
import { getCategories, getEvents, getUsers } from '../components/oi/Api';

// get data from the json server
export const loader = async () => {
  const events = await getEvents();
  const users = await getUsers();
  const categories = await getCategories();

  return { events, users, categories };
};

export const EventsPage = () => {
  // get data to display on screen
  const { events, users, categories } = useLoaderData();
  console.log(users, events, categories);
  // to filter, sort and search events
  const [eventChoice, setEventChoice] = useState(events);

  // display events on screen with the right data
  return (
    <section className="events-page-container">
      <h1> List of all events</h1>
      {eventChoice.map((event) => (
        <div key={event.id}>
          <h1>{event.title}</h1>
          <h3>{event.location}</h3>
          <p>{event.descritption}</p>

          <img className="small-image" src={event.image} alt={event.title} />
        </div>
      ))}
    </section>
  );
};
