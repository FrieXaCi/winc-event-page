// imports from libraries
// react-router-dom
import { redirect, Form, useOutletContext } from 'react-router-dom';
// react-toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// imports from files
// components/oi/Api
import { sendRequest } from '../oi/Api';
// images
import toastErrorCat from '../../images/toast-error-cat-create.jpg';
import toastSuccesCat from '../../images/toast-succes-cat-create.jpg';

// send data to server
export const action = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  try {
    const response = await sendRequest('events', 'POST', postData);

    toast.success('🦄 Event succesfully created', {
      icon: <img src={toastSuccesCat} />,
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'ligth',
      style: {
        background: 'linear-gradient(to right, #3ab445, #abfd1d, #8efc45 )',
        color: '#071000',
        width: '450px',
        height: '600px',
      },
    });

    return redirect(`/event/${response.id}`);
  } catch (error) {
    console.error('Error:', error);
    toast.error(
      '🦄due to problems, this event is not created. please try again later!!',
      {
        icon: <img src={toastErrorCat} />,
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'ligth',
        style: {
          background: 'linear-gradient(to right, #ff0000, #ff8080)',
          color: 'white',
          width: '350px',
          height: '500px',
        },
      }
    );
  }

  return null;
};

// get users and categories from json server
export const NewEvent = () => {
  // to use users and categories from jsonserver
  const { users, categories } = useOutletContext();
  //console.log(users, categories);

  // form to create new event
  return (
    <section className="form-page">
      <section className="form-container">
        <h1>Create new event</h1>

        <section className="form-field">
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
              <option value="default">Choose a Categorie</option>
              {categories.map((categorie) => (
                <option key={categorie.id} value={categorie.id}>
                  {categorie.name}
                </option>
              ))}
            </select>
            <label> Starts at:</label>
            <input type="datetime-local" name="startTime" />
            <label>Ends at:</label>
            <input type="datetime" name="endTime" />
            <label>Select User</label>
            <select name="createdBy" placeholder="Select user">
              <option value="default">Choose a User</option>
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
        </section>
      </section>
    </section>
  );
};
