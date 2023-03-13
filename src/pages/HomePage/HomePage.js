import React from 'react'
import { FaRocket } from 'react-icons/fa'
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className="container">
      <div className="hero-text">
      <h1>
        Welcome To My React API <span>Project.</span>
      </h1>
      </div>
      <FaRocket className="App-logo" />
    </div>
  )
}

export default HomePage