// imports from libraries
import { Link, useRouteError } from 'react-router-dom';
// imports from files
// images
import errorCat from '../../images/errorCat.jpg';

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <section className="error-page">
      <section className="error-container">
        <h1>Oops!</h1>
        <p>
          We hazz a problem... our team is on it!! <br></br> Thanks for being
          paw-some and patient.
        </p>

        <section className="image-container">
          <img src={errorCat} alt="mad cat" />
        </section>
        <Link to="/events">
          <button>Back to Events</button>
        </Link>
      </section>
    </section>
  );
};
