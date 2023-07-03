// imports from librarie
import React from 'react';
//import from files
import homepageCat from '../images/homepageCat.jpg';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <section className="home-page-container">
      <Link to="/events">
        <h1>See all events</h1>
        <img className="big-image" src={homepageCat} alt="homePageCat" />
      </Link>
    </section>
  );
};
