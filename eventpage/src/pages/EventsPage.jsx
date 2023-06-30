// imports from libraries
// react
import { useState } from 'react';
// react-router-dom
import { Link, useLoaderData, useOutletContext } from 'react-router-dom';
// imports from file
// component/eventhelpers
import { SearchEvent } from '../components/EventHelpers/SearchEvent';
import { SortEvent } from '../components/EventHelpers/SortEvent';
import { FilterEvent } from '../components/EventHelpers/FilterEvent';
// components /oi/ api
import { sendRequest } from '../components/oi/Api';

// get data from the json server
export const loader = async () => {
  const events = await sendRequest('events', 'GET', null);

  return { events };
};

export const EventsPage = () => {
  // get data to display on screen
  const { events } = useLoaderData();
  const { categories } = useOutletContext();
  //console.log( events, categories);
  // to filter, sort and search events
  const [filterEvent, setFilterEvent] = useState(events);

  // display events on screen with the right data
  return (
    <section className="card-page-container">
      <h1> List of all events</h1>
      <section className="header-container">
        <SearchEvent setFilterEvent={setFilterEvent} />
        <SortEvent events={events} setFilterEvent={setFilterEvent} />
        <FilterEvent
          filterEvent={filterEvent}
          setFilterEvent={setFilterEvent}
        />
      </section>

      {filterEvent ? (
        <section className="card-container">
          {filterEvent.map((event) => (
            <article className="card" key={event.id}>
              <Link to={`event/${event.id}`}>
                <h1>{event.title}</h1>
                <h3>{event.location}</h3>
                <p>{event.descritption}</p>
                <img
                  className="small-image"
                  src={event.image}
                  alt={event.title}
                />
                <p>Location: {event.location}</p>
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
              </Link>
            </article>
          ))}
        </section>
      ) : null}
    </section>
  );
};
