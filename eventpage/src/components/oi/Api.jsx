const ROOT_URL = 'http://localhost:3000/';

export const sendRequest = async (endpoint, method, data = null, id = null) => {
  const url = id ? `${ROOT_URL}${endpoint}/${id}` : `${ROOT_URL}${endpoint}`;

  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  const responseData = await response.json();

  return responseData;
};
