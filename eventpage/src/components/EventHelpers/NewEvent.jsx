// react-router-dom
import { redirect } from 'react-router-dom';
// components/oi/Api
import { sendRequest } from '../oi/Api';

export const action = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());

  const newId = await sendRequest('events', 'POST')
    .then((res) => res.json())
    .then((json) => json.id);

  return redirect(`/event/${newId}`);
};

// get users and categories from json server
export const loader = async () => {
  const users = await sendRequest('users', 'GET', null);
  const categories = await sendRequest('categories', 'GET', null);

  return { users, categories };
};
export const NewEvent = () => {};
