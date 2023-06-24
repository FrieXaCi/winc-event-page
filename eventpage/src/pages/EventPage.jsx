//react-router-dom
import { useLoaderData, Link } from 'react-router-dom';
// components/io/api
import { sendRequest } from '../components/oi/Api';

export const loader = async ({ params }) => {
  const event = await sendRequest('events', 'GET', null, params.eventId);
  const users = await sendRequest('users', 'GET', null);
  const categories = await sendRequest('categories', 'GET', null);

  return { event, users, categories };
};

export const EventPage = () => {
  const { event, users, categories } = useLoaderData();

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <section className="events-page-container">
      <h1>{event.title} </h1>
      <p>{event.description}</p>

      <img className="big-image" src={event.image} alt={event.title} />
      <p>{event.location}</p>
      <p>
        Starts at:{' '}
        {new Date(event.startTime).toLocaleDateString([], {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
        })}
      </p>
      <p>
        Time:{' '}
        {new Date(event.startTime).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
      <p>
        Ends at:{' '}
        {new Date(event.endTime).toLocaleDateString([], {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
        })}
      </p>
      <p>
        Time:{' '}
        {new Date(event.endTime).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
      <div>
        {categories.map((categorie) =>
          event.categoryIds?.includes(categorie.id) ? (
            <div key={categorie.id}>
              <p>Categorie: {categorie.name}</p>
            </div>
          ) : null
        )}
      </div>
      <div>
        {users.map((user) =>
          user.id == event.createdBy ? (
            <div key={user.id}>
              <img className="small-image" src={user.image} />
            </div>
          ) : null
        )}
        {users.map((user) =>
          user.id == event.createdBy ? (
            <div key={user.id}>
              <p>{user.name}</p>
            </div>
          ) : null
        )}
      </div>
      {/*    <Link to={'/'}>
        <button onClick={deleteEvent}>delete event</button>
      </Link>*/}
      <Link to={`/event/${event.id}/update`}>
        <button>Edit event</button>
      </Link>
    </section>
  );
};
