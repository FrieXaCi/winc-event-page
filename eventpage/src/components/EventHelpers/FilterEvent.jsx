export const FilterEvent = ({ filterEvent, setFilterEvent }) => {
  /*   // get data to sort on category
  const getCategories = async () => {
    const sortCategories = await fetch(
      'http://localhost:3000/events?categoryIds=1'
    );
    console.log(sortCategories);
    return { sortCategories: await sortCategories.json() };
  }; */

  const blues = async () => {
    console.log('filterEvent:', filterEvent);
    try {
      const response = await fetch(
        'http://localhost:3000/events?categoryIds=5'
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setFilterEvent(responseData);
      } else {
        throw new Error('Error retrieving data');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const jazz = async () => {
    console.log('filterEvent:', filterEvent);
    try {
      const response = await fetch(
        'http://localhost:3000/events?categoryIds=4'
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setFilterEvent(responseData);
      } else {
        throw new Error('Error retrieving data');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const pop = async () => {
    console.log('filterEvent:', filterEvent);
    try {
      const response = await fetch(
        'http://localhost:3000/events?categoryIds=3'
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setFilterEvent(responseData);
      } else {
        throw new Error('Error retrieving data');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const rock = async () => {
    console.log('filterEvent:', filterEvent);
    try {
      const response = await fetch(
        'http://localhost:3000/events?categoryIds=2'
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setFilterEvent(responseData);
      } else {
        throw new Error('Error retrieving data');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const dance = async () => {
    console.log('filterEvent:', filterEvent);
    try {
      const response = await fetch(
        'http://localhost:3000/events?categoryIds=1'
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setFilterEvent(responseData);
      } else {
        throw new Error('Error retrieving data');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={blues}>Blues</button>
      <button onClick={jazz}>Jazz</button>
      <button onClick={pop}>Pop</button>
      <button onClick={rock}>rock</button>
      <button onClick={dance}>Dance</button>
    </div>
  );
};
