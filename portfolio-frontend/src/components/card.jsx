import React from 'react'
import headshot from '../assets/headshot.png'

// Styles: 
// card = default
// bio = For biography on Home page
// details = For page details/explainations 
// container = For surrounding other components (i.e. experiments)

export default function Card({cardStyle='card',picture, pictureText, cardText, infoHover, children}) {
  return (
     <>
    <div className={cardStyle}>
        <img className="card-image" src={picture} alt={pictureText}/>
        <p className="card-text">{cardText}</p>
        {children}
        <div className='info'>{infoHover}</div>
    </div>

    </>
)
}
