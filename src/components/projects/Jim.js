import React from 'react'
import james from '../../assets/james.png'

const Jim = () => {
  return (
    <div className="solo-card">
      <div className="inner-card">
        <a href="https://jamesoseland.com">
          <img src={james} className="project-solo" alt="kayak" />{' '}
        </a>

        <h3>
          <strong>James Oseland's World Food</strong> is James' website for his
          new book series.
          <ul>
            <li>Incorporates Mailchimp for newsletter signup.</li>
            <li>
              Renders two Carousels: one built from scratch, the other using a
              library.
            </li>
            <li>
              Displays a React frontend with CSS grid and flexbox, being
              responsive.{' '}
            </li>
          </ul>
        </h3>
        <div className="icons">
          <a href="https://jamesoseland.com">
            <i className="fas fa-play-circle fa-2x" />
          </a>
          <a href="https://github.com/cynthiaeddy/jimmy-choo">
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Jim
