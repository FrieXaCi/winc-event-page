// react-router-dom
import { Form } from 'react-router-dom';
//  to sort all events by name, date or category
export const SortEvent = ({ setFilterEvent, events }) => {
  // get data to sort on category
  const getCategories = async () => {
    const sortCategories = await fetch(
      'http://localhost:3000/events?_sort=categoryIds&_order=asc'
    );
    return { sortCategories: await sortCategories.json() };
  };
  // get data to sort from a-z
  const getTitles = async () => {
    const sortTitles = await fetch(
      'http://localhost:3000/events?_sort=title&_order=asc'
    );
    return { sortTitles: await sortTitles.json() };
  };

  // get data to sort by date
  const getDates = async () => {
    const sortDates = await fetch(
      'http://localhost:3000/events?_sort=startTime&_order=asc'
    );
    return { sortDates: await sortDates.json() };
  };

  // function to sort the data
  const handleSort = (e) => {
    if (e.target.value == 'category') {
      getCategories().then(({ sortCategories }) => {
        setFilterEvent(sortCategories);
      });
    }
    if (e.target.value == 'az') {
      getTitles().then(({ sortTitles }) => {
        setFilterEvent(sortTitles);
      });
    }
    if (e.target.value == 'date') {
      getDates().then(({ sortDates }) => {
        setFilterEvent(sortDates);
      });
    } else {
      setFilterEvent(events);
    }
  };

  // retun the selected sorted data onChange
  return (
    <div>
      <Form>
        <select placeholder="sort events by: " onChange={handleSort}>
          <option value={'date'}>Date</option>
          <option value="category">Category</option>
          <option value={'az'}>Title</option>
        </select>
      </Form>
    </div>
  );
};
