import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/programs-header.png'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Programs - BJJ Lifestyle Academy</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Our Programs</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <h3>Adult Brazilian Jiu-Jitsu</h3>
          <p>
            Our adult program is perfect for adults just looking to get in shape
            and learn self defense or adults looking to compete nationally or
            fight in Mixed Martial Arts (MMA).
          </p>
          <h3>Children's Brazilian Jiu-Jitsu</h3>
          <p>
            Whether you want your child to learn the best form of self-defense
            around, or to compete nationally, BJJ Lifestyle Academy is the
            perfect school for you.
          </p>
          <h3>No-Gi (Brazilian Jiu-Jitsu & Submission Wrestling)</h3>
          <p>
            No-Gi Brazilian Jiu-Jitsu is the art of BJJ without the use of a Gi.
            It is also a great base for Mixed Martial Arts (MMA).
          </p>
          <h3>Conditioning</h3>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
