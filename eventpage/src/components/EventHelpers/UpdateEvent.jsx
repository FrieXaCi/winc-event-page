// imports from librarie
import {
  redirect,
  useLoaderData,
  Form,
  useOutletContext,
} from 'react-router-dom';
// react-toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// imports from file
import { sendRequest } from '../oi/Api';

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  try {
    const response = await sendRequest(
      'events',
      'PUT',
      postData,
      params.eventId
    );

    toast.success('🦄 Event succesfully updated', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

    return redirect(`/event/${params.eventId}`);
  } catch (error) {
    console.error('Error:', error);
    toast.error(
      '🦄due to problems, this event is not updated. please try again later!!',
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

export const loader = async ({ params }) => {
  const event = await sendRequest('events', 'GET', null, params.eventId);
  /*   const users = await sendRequest('users', 'GET', null);
  const categories = await sendRequest('categories', 'GET', null); */

  return { event /* , users, categories */ };
};

export const UpdateEvent = () => {
  const { event } = useLoaderData();
  const { users, categories } = useOutletContext();

  return (
    <>
      <div className="form-container">
        <h1>Update event</h1>
        <div className="form-field">
          <h1> her comes the updated data </h1>
          <Form method="PUT" action={`/event/${event.id}/update`}>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              defaultValue={event.title}
            />
            <label>Description:</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              defaultValue={event.description}
            />
            <label>Image(URL):</label>
            <input
              placeholder="https://website.com/image.jpg......."
              aria-label="image"
              type="text"
              name="image"
              defaultValue={event.image}
            />
            <label>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              defaultValue={event.location}
            />
            <label>Select categorie:</label>
            <select name="categoryIds" placeholder="Select categorie">
              {categories.map((categorie) => (
                <option key={categorie.id} value={categorie.id}>
                  {categorie.name}
                </option>
              ))}
            </select>
            <label> Starts at:</label>
            <input
              type="datetime-local"
              name="startTime"
              defaultValue={event.startTime}
            />
            <label>Ends at:</label>
            <input
              type="datetime-local"
              name="endTime"
              defaultValue={event.endTime}
            />
            <label>Select User</label>
            <select name="createdBy" placeholder="Select user">
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <input type="hidden" name="id" value={event.id} />
            <button type="submit">Save</button>
          </Form>
        </div>
      </div>
    </>
  );
};
