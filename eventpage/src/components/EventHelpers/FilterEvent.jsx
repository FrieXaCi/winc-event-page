// imports from libraries
// react
import { useEffect } from 'react';
// react-router-dom
import { useSearchParams } from 'react-router-dom';

export const FilterEvent = ({ filterEvent, setFilterEvent }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('categoryIds');
  console.log(typeFilter);

  useEffect(() => {
    const displayedEvents = typeFilter
      ? filterEvent.filter(
          (event) => event.categoryIds.toLowerCase() === typeFilter
        )
      : filterEvent;

    setFilterEvent(displayedEvents); // update the filterEvent in the parent component
  }, [typeFilter, filterEvent, setFilterEvent]);

  return (
    <div>
      <button
        onClick={() =>
          setSearchParams(new URLSearchParams({ categoryIds: '1' }))
        }
      >
        Dance
      </button>
      <button
        onClick={() =>
          setSearchParams(new URLSearchParams({ categoryIds: '2' }))
        }
      >
        Rock
      </button>
      <button
        onClick={() =>
          setSearchParams(new URLSearchParams({ categoryIds: '3' }))
        }
      >
        Pop
      </button>
      <button
        onClick={() =>
          setSearchParams(new URLSearchParams({ categoryIds: '4' }))
        }
      >
        Jazz
      </button>
      <button
        onClick={() =>
          setSearchParams(new URLSearchParams({ categoryIds: '5' }))
        }
      >
        Blues
      </button>
    </div>
  );
};
