import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import pic11 from '../assets/images/mike-leg-lock.png'
import pic08 from '../assets/images/bjjla-begin-1.png'
import pic09 from '../assets/images/bjjla-begin-2.png'
import pic10 from '../assets/images/bjjla-begin-3.png'
import pic12 from '../assets/images/leo-seminar-1.png'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>About Us - BJJ Lifestyle Academy</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About Us</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <p>Write up about BJJ Lifestyle Academy...</p>
        </div>
        <div className="box alt">
          <div className="grid-wrapper">
            <div className="col-4">
              <span className="image fit">
                <img src={pic08} alt="" />
                <p>test</p>
              </span>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic09} alt="" />
                <p>
                  2003...I believe this was one of the very first NAGA
                  tournaments in the Midwest. I was a purple belt and competed
                  at the NO-GI absolute against all these Black belt Brazilian
                  Beasts <span role="img">🇧🇷</span>. Won a few matches and I was
                  stopped at the semifinals. I lost on decision after{' '}
                  <a href="#">[...]</a>
                </p>
              </span>
            </div>
            <div className="col-4">
              <span className="image fit">
                <img src={pic10} alt="" />
                <p>test</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="two">
        <div className="inner">
          <header className="major">
            <h1>Here We Are Now</h1>
          </header>
          <span className="image main">
            <img src={pic12} alt="" />
          </span>
          <p>
            Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor
            sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet,
            fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit.
            Donec urna ex, lacinia in purus ac, pretium pulvinar mauris.
            Curabitur sapien risus, commodo eget turpis at, elementum convallis
            elit. Pellentesque enim turpis, hendrerit.
          </p>
          <p>
            <ul className="actions fit">
              <li>
                <Link to="#" className="button big fit">
                  Join Us Today
                </Link>
              </li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
