import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PlansLanding from '../components/PlansLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Our Plans - BJJ Lifestyle Academy</title>
      <meta
        name="description"
        content="Find a BJJ Lifestyle Academy plan that fits you."
      />
    </Helmet>

    <PlansLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>We Care About You - Roll With Us for a Week</h2>
          </header>
          <p>
            Don't rush into your Brazilian Jiu-Jitsu Journey because it will
            become a Lifestyle. Try BJJ Lifestyle Academy out for a week with no
            strings attached before you decide on a plan.
          </p>
          <p>
            All of our plans can be customized to suit whatever your needs may
            be. Looking to only train a few days a week a one location? We have
            a plan for that. Want to bring in the kids and train with them? We
            have a plan for that.
          </p>
          <p>
            You decide what works. If you just can't decide on one, give us a
            call and we will work with you and get you on the mats.
          </p>
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
                <h3>Personalized Plan</h3>
              </header>
              <p>
                We don't believe that only one plan will fit everyone so we keep
                an open mind to working with you to suit your needs. Give us a
                call or drop us an email so we can get you rolling ASAP.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/contact" className="button">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Plan 2</h3>
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
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section> */}
        {/* <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Plan 3</h3>
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
                    Sign Up
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
