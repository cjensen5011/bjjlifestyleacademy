import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/belleville-front.png'
import pic02 from '../assets/images/schedules-photo.png'
import pic03 from '../assets/images/instructors-bg.png'
import pic04 from '../assets/images/programs-bg.png'
import pic05 from '../assets/images/history-bg.png'
import pic06 from '../assets/images/about-bg.png'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Home - BJJ Lifestyle Academy"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Locations</h3>
                <p>View Both our Locations</p>
              </header>
              <Link to="/locations" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Schedules</h3>
                <p>View the schedules for both school locations</p>
              </header>
              <Link to="/schedules" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Instructors</h3>
                <p>Find out more about our faculty</p>
              </header>
              <Link to="/instructors" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Programs</h3>
                <p>Find out what you can learn with us</p>
              </header>
              <Link to="/programs" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>History Brazilian Jiu-Jitsu</h3>
                <p>
                  An Overview of the Gentle Art's Influences and Development
                </p>
              </header>
              <Link to="/history" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>About Us</h3>
                <p>This is where it all began...</p>
              </header>
              <Link to="/about" className="link primary" />
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Sign Up Today</h2>
              </header>
              <p>
                We have multiple plans to get you started on your Brazilian
                Jiu-Jitsu journey today!
              </p>
              <ul className="actions">
                <li>
                  <Link to="/plans" className="button next">
                    View Plans
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
