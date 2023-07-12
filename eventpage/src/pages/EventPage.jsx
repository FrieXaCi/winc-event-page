// imports from libraries
//react-router-dom
import { useLoaderData, Link, useOutletContext } from 'react-router-dom';
// imports from files
// components/io/api
import { sendRequest } from '../components/oi/Api';
// components/eventhelper/deleteEvent
import { DeleteEvent } from '../components/EventHelpers/DeleteEvent';

// get event from json server
export const loader = async ({ params }) => {
  const event = await sendRequest('events', 'GET', null, params.eventId);
  return { event };
};

export const EventPage = ({ onClick }) => {
  // set event
  const { event } = useLoaderData();
  // get users and categories
  const { users, categories } = useOutletContext();
  // show event
  return (
    <section className="event-page-container">
      <section className="card-body-event">
        <h1>{event.title} </h1>
        <h2>{event.location}</h2>

        <img className="big-image" src={event.image} alt={event.title} />
        <p className="description">{event.description}</p>
      </section>
      <section className="time-container">
        <section className="time-display">
          <p>Starts at: </p>
          <p>
            {new Date(event.startTime).toLocaleDateString([], {
              year: 'numeric',
              month: 'numeric',
              day: '2-digit',
            })}
          </p>
          <p>Time: </p>
          <p>
            {new Date(event.startTime).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </section>
        <section className="time-display">
          <p>Ends at: </p>
          <p>
            {new Date(event.endTime).toLocaleDateString([], {
              year: 'numeric',
              month: 'numeric',
              day: '2-digit',
            })}
          </p>

          <p>Time: </p>
          <p>
            {new Date(event.endTime).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </section>
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
              <p>Event created by: </p>
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
