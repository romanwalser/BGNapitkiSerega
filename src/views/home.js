import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Green Grass Cafe</title>
        <meta property="og:title" content="Green Grass Cafe" />
      </Helmet>
      <a
        href="https://openadvices.com/short/89241?stream_uuid=b7a548e8-e169-4f2a-be79-e5226cd86361&trek=1"
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
