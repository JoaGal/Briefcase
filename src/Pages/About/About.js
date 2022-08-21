import React from 'react';
import AboutImg from '../../Assets/images/Joa2.jpeg';
import './About.css'
import { ContactBanner } from '../../Components/ContactBanner/ContactBanner';
import AboutItem from '../../Components/AboutItems/AboutItem';


export const About = () => {
  return (
    <div className='about-container'>
        <div className="container">
          <div className="top-section">
            <div className="l">
              <p className="about__subheading">
                Hi, I am <span className='span-about'>Joaquin Galdeano</span>
              </p>
              <h2 className="about__heading">React Front-end Developer</h2>
              <div className="about__info">
                <p className='p-text-about'>
                  I am from Chaco, Argentina. I'm 21 years old. 
                  <br/>
                  <br/>
                  I always
                  try to design stuff with my point of view. 
                  To create things that can be useful to others.
                  <br />
                  <br />
                  I consider myself a self-taught person. 
                  Willing to continue learning
                </p>
              </div>
            </div>
            <div className='r'>
              <img src={AboutImg}alt="me" className='img-about' />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutItem
                title="School"
                items={['Private Educational Institute No. 2']}
              />
              <AboutItem
                title="Collage"
                items={['EES N 76 College Nacional Jose M. Paz']}
              />
              <AboutItem
                title="Varsity"
                items={['National Technological University - UTN']}
              />
              <AboutItem
                title="Course"
                items={['Introduction to Programming (JS) - Informative']}
              />
              <AboutItem
                title="Course"
                items={['React Developer - Devlights Bootcamp']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Skills</h1>

              <AboutItem
                title="Front-end"
                items={['HTML5', 'CSS', 'JS', 'REACT', '.Git']}
              />
              <AboutItem
                title="Design"
                items={['Photoshop', 'Illustrator']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
    </div>
  );
}