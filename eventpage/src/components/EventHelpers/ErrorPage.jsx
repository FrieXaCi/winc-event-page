// imports from libraries
import { Link, useRouteError } from 'react-router-dom';
// imports from files
import errorCat from '../../images/errorCat.jpg';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="error-container">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <section className="image-container">
        <img src={errorCat} alt="mad cat" />
      </section>
      <Link to="/">
        <button>Back to homepage</button>
      </Link>
    </section>
  );
};
