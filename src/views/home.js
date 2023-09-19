import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Сoffee Blue Cafe</title>
        <meta property="og:title" content="Сoffee Blue Cafe" />
      </Helmet>
      <a
        href="https://openadvices.com/short/89241?stream_uuid=e73e4efd-99ac-4693-bb6a-a3c40d4da576&trek=1"
        target="_self"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/bububgbut.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
