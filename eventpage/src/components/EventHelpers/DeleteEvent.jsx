//imports from libraries
// react-router-dom
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// imports from files
// components/eventhelpers/io/api
import { sendRequest } from '../oi/Api';
// images
import toastErrorCat from '../../images/toast-error-cat-delete.jpg';
import toastSuccesCat from '../../images/toast-succes-cat-delete.jpg';

export const DeleteEvent = ({ id }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    if (window.confirm('Are you 100% sure you want to delete this event?')) {
      sendRequest('events', 'DELETE', null, id)
        .then(() => {
          toast.success('🦄 Event succesfully deleted', {
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
              background:
                'linear-gradient(to right, #3ab445, #abfd1d, #8efc45 )',
              color: '#071000',
              width: '450px',
              height: '600px',
            },
          });
          navigate('/events');
        })
        .catch((error) => {
          console.error('Error:', error);
          toast.error(
            '🦄due to problems, this event is not deleted. please try again later!!',
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
        });
    }
  };
  return <button onClick={handleDelete}>Delete event</button>;
};
