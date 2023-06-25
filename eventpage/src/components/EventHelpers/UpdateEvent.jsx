import { redirect, useLoaderData, Form } from 'react-router-dom';
import { sendRequest } from '../oi/Api';

export const action = async ({ request, params }) => {
  const formData = Object.fromEntries(await request.formData());

  const { updateId } = await sendRequest(
    'events',
    'PUT',
    formData,
    params.eventId
  );

  return redirect(`/`);
};

export const loader = async ({ params }) => {
  const event = await sendRequest('events', 'GET', null, params.eventId);
  const users = await sendRequest('users', 'GET', null);
  const categories = await sendRequest('categories', 'GET', null);

  return { event, users, categories };
};

export const UpdateEvent = () => {
  const { event, users, categories } = useLoaderData();

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
