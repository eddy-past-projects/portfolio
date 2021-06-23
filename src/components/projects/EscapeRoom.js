import React from 'react'
import whiteDoor1 from '../../assets/whiteDoor1.jpg'

const EscapeRoom = () => {
  return (
    <div className="solo-card">
      <div className="inner-card">
        <a href="https://white-door-escape.netlify.app">
          <img
            src={whiteDoor1}
            className="project-solo escape"
            alt="escape-room"
          />
        </a>

        <h3>
          <strong>The White Door Escape</strong> is a simple escape game.
          <ul>
            <li>Built with React Hooks and CSS.</li>
          </ul>
        </h3>

        <div className="icons">
          <a href="https://white-door-escape.netlify.app">
            <i className="fas fa-play-circle fa-2x" />
          </a>

          <a href="https://github.com/cynthiaeddy/room_escape">
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default EscapeRoom
