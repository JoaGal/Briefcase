import React from 'react';
import './ContactBanner.css';
import { Link } from "react-router-dom";

export const ContactBanner = () => {
  return (
    <div className='contactBanner__container'>
      <div className='container'>
        <div className="contactBanner__wrapper">
          <p className='p-text'>Have a project in mind</p>
          <h3 className="contactBanner__heading">Can you talk to me</h3>
          <Link to='/contact'>
          <button className='contactBanner-button'>Contact Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
