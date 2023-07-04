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

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [filterEvent, setFilterEvent] = useState(events);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedEvents = filterEvent.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filterEvent.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="card-page-container">
      <section className="header-container">
        <section className="sort-search-container">
          <SearchEvent setFilterEvent={setFilterEvent} />
          <SortEvent events={filterEvent} setFilterEvent={setFilterEvent} />
        </section>
        <section className="filter-container">
          <FilterEvent filterEvent={events} setFilterEvent={setFilterEvent} />
        </section>
      </section>
      <h1> List of all events</h1>
      {displayedEvents ? (
        <section className="card-container">
          {displayedEvents.map((event) => (
            <article className="card" key={event.id}>
              <Link to={`/event/${event.id}`}>
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

      {/* Pagination controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= filterEvent.length}
        >
          Next
        </button>
      </div>
    </section>
  );
};
