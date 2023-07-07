// imports from libraries
//react-router-dom
import { useLoaderData, Link, useOutletContext } from 'react-router-dom';
// imports from files
// components/io/api
import { sendRequest } from '../components/oi/Api';
// components/eventhelper/deleteEvent
import { DeleteEvent } from '../components/EventHelpers/DeleteEvent';

export const loader = async ({ params }) => {
  const event = await sendRequest('events', 'GET', null, params.eventId);

  return { event };
};

export const EventPage = ({ onClick }) => {
  const { event } = useLoaderData();
  const { users, categories } = useOutletContext();

  return (
    <section className="event-page-container">
      <section className="card-body-event">
        <h1>{event.title} </h1>
        <h2>{event.location}</h2>

        <img className="big-image" src={event.image} alt={event.title} />
        <p>{event.description}</p>
      </section>
      <p>
        {new Date(event.startTime).toLocaleDateString([], {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
        })}
      </p>
      <section className="time-container">
        <p>
          Starts at:{' '}
          {new Date(event.startTime).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
        <p>
          Ends at:{' '}
          {new Date(event.endTime).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </section>
      <section>
        {categories.map((categorie) =>
          event.categoryIds?.includes(categorie.id) ? (
            <section key={categorie.id}>
              <p>Categorie: {categorie.name}</p>
            </section>
          ) : null
        )}
      </section>
      <section className="user-container">
        {users.map((user) =>
          user.id == event.createdBy ? (
            <section key={user.id}>
              <img className="user-image" src={user.image} />
            </section>
          ) : null
        )}
        {users.map((user) =>
          user.id == event.createdBy ? (
            <section key={user.id}>
              <p>{user.name}</p>
            </section>
          ) : null
        )}
      </section>
      <section className="event-button-container">
        <DeleteEvent onclick={onClick} id={event.id} />
        <Link to={`/event/${event.id}/update`}>
          <button>Edit event</button>
        </Link>
      </section>
    </section>
  );
};
