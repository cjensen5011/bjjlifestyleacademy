import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import InstructorsLanding from '../components/InstructorsLanding'

import pic08 from '../assets/images/coach-profile.png'
import pic09 from '../assets/images/morgan-profile.png'
import pic10 from '../assets/images/neal-profile.png'
import pic11 from '../assets/images/leo-profile.png'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Instructors - BJJ Lifestyle Academy</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <InstructorsLanding />

    <div id="main">
      {/* <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Meet our Instructors</h2>
          </header>
          <p>...</p>
        </div>
      </section> */}
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Professor "Brazilian" Mike Rethmeyers</h3>
              </header>
              <p>Head Coach</p>
              <p>
                3rd Degree Black Belt under Leo Pechana <br />
                14 time International Brazilian Jiu-Jitsu Federation (IBJJF)
                medalist. As a black belt, Professor Mike won several titles
                including a 1st Place at Pan-American Championship and 3rd Place
                at the World Championship and 7 times International Open
                Champion.
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
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Morgan Freed</h3>
              </header>
              <p>Assistant Coach</p>
              <p>
                Entrepeneur, BJJ Black Belt, Self-Defense Instructor, Weight
                Loss and Fitness Expert, MMA Coach, Anti-Bullying Coach, Women's
                Self Defense Coach
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
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Neal "Zen Master" Winkler</h3>
              </header>
              <p>Assistant Coach</p>
              <p>Husband, Father, BJJ Black Belt</p>
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
            <img src={pic11} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Professor Leo Pechana</h3>
              </header>
              <p />
              Head Coach - Infinity Martial Arts
              <p>3-Time World Champion, Kronos BJJ, NULP,</p>
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
      </section>
    </div>
  </Layout>
)

export default Landing
