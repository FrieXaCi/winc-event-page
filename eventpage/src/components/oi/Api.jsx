export const getEvents = async (id) => {
  const url = id
    ? `http://localhost:3000/events/${id} `
    : 'http://localhost:3000/events';

  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: 'Failed to fetch events',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

export const getUsers = async (id) => {
  const url = id
    ? `http://localhost:3000/users/${id}`
    : 'http://localhost:3000/users';

  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: 'Failed to fetch users',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};

export const getCategories = async (id) => {
  const url = id
    ? `http://localhost:3000/categories/${id}`
    : 'http://localhost:3000/categories';

  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: 'Failed to fetch categories',
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data;
};
