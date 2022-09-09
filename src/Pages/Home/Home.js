import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'
import { ContactBanner } from '../../Components/ContactBanner/ContactBanner';

export const Home = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span id='hero__span'>Hello, I am</span>
            <span className="hero__name" id='hero__span'>Joaquin Galdeano</span>
          </h1>
          <div className="hero__img">
          </div>
          <div className="hero__info">
            <p className='p-text'>
              I work as a Fornt-end React Developer.
              I have passion for my work, I do it for pleasure.
              On this website you will find information about me and what i do.
            </p>
            <Link to='/projects'>
              <button className='hero__button'>See my works</button>
            </Link>
          </div>
        </div>
      </div>
      <ContactBanner />
    </>
  )
}
