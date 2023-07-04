// import form libraries
import { FaSistrix } from 'react-icons/fa';

// to search for events
export const SearchEvent = ({ setFilterEvent }) => {
  // get the data from search
  const matchEvents = async (filterEvent) => {
    const matchedEvent = await fetch(
      `http://localhost:3000/events?q=${filterEvent}`
    );
    return { event: await matchedEvent.json() };
  };

  // function to search for data
  const handleSearchEvent = (e) => {
    const searchEvent = e.target.value;
    matchEvents(searchEvent).then(({ event }) => {
      setFilterEvent(event);
    });
  };
  // return the searched data
  return (
    <section className="searchfield">
      <input onChange={handleSearchEvent} placeholder="search for events" />
      <FaSistrix />
    </section>
  );
};
