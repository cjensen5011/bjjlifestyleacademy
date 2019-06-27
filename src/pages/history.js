import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import HistoryLanding from '../components/HistoryLanding'

import pic08 from '../assets/images/bjj-belt-system.png'
import pic09 from '../assets/images/bjj-origin-armbar.png'
import pic10 from '../assets/images/pic10.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>History - BJJ Lifestyle Academy</title>
      <meta name="description" content="The history of BJJ Lifestyle Academy" />
    </Helmet>

    <HistoryLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>What is Brazilian Jiu-Jitsu?</h2>
          </header>
          <p>
            Brazilian Jiu-Jitsu is a martial art and combat sport that focuses
            on grappling but especially ground fighting. It was derived from the
            Japanese martial art of Kodokan Judo in the early 20th century,
            which was itself then a recently-developed system (founded in 1882),
            based on multiple schools (or Ryu) of Japanese jujutsu.
          </p>
          <p>
            It promotes the principle that a smaller, weaker person can
            successfully defend themselves against a bigger, stronger assailant
            using leverage and proper technique; most notably, by applying
            joint-locks and chokeholds to defeat them. BJJ can be trained for
            self defense, sport grappling tournaments (gi and no-gi) and mixed
            martial arts (MMA) competition. Sparring (commonly referred to as
            'rolling') and live drilling play a major role in training, and a
            premium is placed on performance, especially in competition.
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
                <h3>BJJ Belt System</h3>
              </header>
              <p>
                In order to unify the teachings, the practice of Jiu-Jitsu and
                to standardize models of competition, the International
                Brazilian Jiu-Jitsu Federation (IBJJF) presents this General
                System of Graduation.
              </p>
              <p>
                To continue the progress and spirit of the recently renewed Jiu
                Jitsu Book of Rules, launched in January 2012, the General
                System of Graduation strives to enhance the athletes’
                understanding of the graduation process from white belt to red
                belt.{' '}
              </p>
              <p>
                The IBJJF has updated the General System of Graduation to
                provide improvements to our old rules. The biggest improvement
                is the inclusion of a new grading system for athletes 4 to 15
                years of age, which separates each belt rank groups (gray,
                yellow, orange and green). This new system for athletes under
                the age of 16 will make the practice of Jiu-Jitsu more exciting
                and attractive by providing more frequent graduations, which
                also provides steady advancement throughout the athlete’s
                career.
              </p>
              <p>
                In regards to the grading system of athlete from 04 to 15 years
                old, the IBJJF added additional improvements and suggestions for
                professors and instructors. For Example: There are three
                different ways to grant degrees, which the IBJJF suggests to be
                done monthly, trimestrial and quarterly. The purpose of this is
                to track the Jiu-Jitsu practitioner’s time within every color
                belt rank.
              </p>
              <p>
                The current General System of Graduation is evolving and may
                need to be modified over time according to the needs of
                JiuJitsu. The IBJJF intends to continue working to make the
                sport easier, more attractive and satisfying for athletes and
                professors.
              </p>
              <p>
                Further explaination of the IBJJF Belt system can be found{' '}
                <a href="https://ibjjf.com/wp-content/uploads/2016/11/20150210_GraduationIBJJF_EN_vs2.pdf">
                  here
                </a>
                .
              </p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Get Directions
                  </Link>
                </li>
              </ul> */}
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
                <h3>Origins</h3>
              </header>
              <p>
                Geo Omori opened the first jiu-jitsu / judo school in Brazil in
                1909. He taught a number of individuals including Luiz França.
                Later, Mitsuyo Maeda was one of five of the Kodokan's top
                groundwork (newaza) experts that judo's founder Kano Jigoro sent
                overseas to demonstrate and spread his art to the world. Maeda
                had trained first in sumo as a teenager, and after the interest
                generated by stories about the success of Kodokan Judo at
                competitions with other jujutsu schools of the time, became a
                student of Jigoro Kano. Maeda left Japan in 1904 and visited a
                number of countries giving "jiu-do" demonstrations and accepting
                challenges from wrestlers, boxers, savate fighters and various
                other martial artists before eventually arriving in Brazil on
                November 14, 1914.
              </p>
              <p>
                Learn more{' '}
                <a href="https://en.wikipedia.org/wiki/Brazilian_jiu-jitsu">
                  here
                </a>
                .
              </p>
              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Get Directions
                  </Link>
                </li>
              </ul> */}
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
