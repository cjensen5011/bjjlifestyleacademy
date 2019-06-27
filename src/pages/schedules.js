import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import SchedulesLanding from '../components/SchedulesLanding'

import pic08 from '../assets/images/belleville-front.png'
import pic09 from '../assets/images/stl-front.png'
import pic10 from '../assets/images/pic10.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Schedules - BJJ Lifestyle Academy</title>
      <meta
        name="description"
        content="View all the schedules for both school locations."
      />
    </Helmet>

    <SchedulesLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Class Schedules</h2>
          </header>
          <p>View both the school scheduels below.</p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Belleville School Schedule</h3>
              </header>
              <p>Coming Soon...</p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>St. Louis School Schedule</h3>
              </header>
              <p>Coming Soon...</p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
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
