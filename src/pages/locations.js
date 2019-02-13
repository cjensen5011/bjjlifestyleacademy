import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import LocationsLanding from '../components/LocationsLanding'

import pic08 from '../assets/images/soco-mats.png'
import pic09 from '../assets/images/bell-mats.png'
import pic10 from '../assets/images/pic10.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Locations - BJJ Lifestyle Academy</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <LocationsLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>The Gentle Art</h2>
          </header>
          <p>
            Brazilian Jiu-Jitsu is a martial art that focuses on ground fighting
            with sweeps, throws, take-downs, chokes, joint manipulation, and
            other submission techniques causing opponents to quit attacking or
            rendering them unable to continue to fight.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Belleville School</h3>
              </header>
              <p>5308 North Belt West Belleville, IL 62226</p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Get Directions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>St. Louis School</h3>
              </header>
              <p>4280 Telegraph Road St. Louis, MO 63129</p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Get Directions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Sed nunc ligula</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section> */}
      </section>
    </div>
  </Layout>
)

export default Landing
