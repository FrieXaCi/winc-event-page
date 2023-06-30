// imports from libraries
// react
import { useState, useEffect } from 'react';
export const FilterEvent = ({ filterEvent, setFilterEvent }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3000/categories');
        if (response.ok) {
          const categoriesData = await response.json();
          setCategories(categoriesData);
        } else {
          throw new Error('Error retrieving categories data');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  const getData = async () => {
    try {
      const categoryName =
        categories.find((category) => category.id === filterEvent)?.name || '';
      const url = `http://localhost:3000/events?categoryIds=${categoryName}`;

      const response = await fetch(url);

      if (response.ok) {
        const responseData = await response.json();
        setFilterEvent([responseData]);
      } else {
        throw new Error('Error retrieving data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (categoryId) => {
    setFilterEvent(categoryId);
    getData(); // Call getData immediately after setting the filter
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFilter('Blues')}>Blues</button>
        <button onClick={() => handleFilter('Jazz')}>Jazz</button>
        <button onClick={() => handleFilter('Pop')}>Pop</button>
        <button onClick={() => handleFilter('Rock')}>Rock</button>
        <button onClick={() => handleFilter('Dance')}>Dance</button>
      </div>
    </div>
  );
};
