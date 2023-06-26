//imports from libraries
// react-router-dom
import { redirect } from 'react-router-dom';
// imports from files
// components/eventhelpers/io/api
import { sendRequest } from '../oi/Api';

export const DeleteEvent = () => {
  const handleDelete = () => {
    if (window.confirm('Are you 100% sure you want to delete this event?')) {
      sendRequest('events', 'DELETE', null, event.id);
      fetch(`http://localhost:3000/events/${event.id}`, {
        method: 'DELETE',
      })
        .then(() => {
          alert('post deleted');
          redirect('/ ');
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('error');
        });
    }
  };
  return <button onClick={handleDelete}>Delete event</button>;
};
