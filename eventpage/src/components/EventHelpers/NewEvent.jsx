// imports from libraries
// react-router-dom
import { redirect, Form, useLoaderData } from 'react-router-dom';
// react-toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// imports from files
// components/oi/Api
import { sendRequest } from '../oi/Api';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  try {
    const response = await sendRequest('events', 'POST', postData);

    toast.success('🦄 Event succesfully created', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

    return redirect(`/event/${response.id}`);
  } catch (error) {
    console.error('Error:', error);
    toast.error(
      '🦄due to problems, this event is not created. please try again later!!',
      {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      }
    );
  }

  return null; // Returning null as the response is not used in this case
};

// get users and categories from json server
export const loader = async () => {
  const users = await sendRequest('users', 'GET');
  const categories = await sendRequest('categories', 'GET');

  return { users, categories };
};
export const NewEvent = () => {
  // to use users and categories from jsonserver
  const { users, categories } = useLoaderData();

  //console.log(users, categories);
  // form to create new event
  return (
    <div className="form-container">
      <h1>Create new event</h1>

      <div className="form-field">
        <Form method="post" id="new-event-form" action="/event/new">
          <label>Title:</label>
          <input type="text" name="title" placeholder="Title" />
          <label>Description:</label>
          <input type="text" name="description" placeholder="Description" />
          <label>Image(URL):</label>
          <input
            placeholder="https://website.com/image.jpg......."
            aria-label="image"
            type="text"
            name="image"
          />
          <label>Location</label>
          <input type="text" name="location" placeholder="Location" />
          <label>Select categorie:</label>
          <select name="categoryIds" placeholder="Select categorie">
            {categories.map((categorie) => (
              <option key={categorie.id} value={categorie.id}>
                {categorie.name}
              </option>
            ))}
          </select>
          <label> Starts at:</label>
          <input type="datetime-local" name="startTime" />
          <label>Ends at:</label>
          <input type="datetime-local" name="endTime" />
          <label>Select User</label>
          <select name="createdBy" placeholder="Select user">
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
          <button className="form-btn" type="submit">
            Save
          </button>
        </Form>
      </div>
    </div>
  );
};
