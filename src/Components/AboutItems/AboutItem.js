import React from 'react';
import './AboutItem.css'

export default function AboutItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <div className='aboutitem-box'>
      <h1 className="aboutitem-title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <p className='p-text'>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}