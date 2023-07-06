// imports from librarie
import React from 'react';
// react-router-dom
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <section className="home-page-container">
      <Link to="/events">
        <section className="homepage-title">
          <h1>See all events</h1>
        </section>
        <article className="homepage-article">
          <p>
            Unleash the purr-fect party season with our Cat Party Calendar!
            Packed with 12 months of feline festivities, it is a claw-some way
            to celebrate your fur-babies. From birthday bashes to costume
            carnivals, let your kitties join the fun. Get your paws on our
            calendar and turn every day into a feline fiesta!
          </p>
        </article>
      </Link>
    </section>
  );
};
