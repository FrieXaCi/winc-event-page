//imports from libraries
// react-router-dom
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// imports from files
// components/eventhelpers/io/api
import { sendRequest } from '../oi/Api';

export const DeleteEvent = ({ id }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    if (window.confirm('Are you 100% sure you want to delete this event?')) {
      sendRequest('events', 'DELETE', null, id)
        .then(() => {
          toast.success('🦄 Event succesfully deleted', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          navigate('/events');
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error(
            '🦄due to problems, this event is not deleted. please try again later!!',
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
        });
    }
  };
  return <button onClick={handleDelete}>Delete event</button>;
};
