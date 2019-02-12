import React from 'react'
import { Link } from 'gatsby'

import pic01 from '../assets/images/bjj-old-banner.png'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>BJJ Lifestyle Academy</h1>
      </header>
      <div className="content">
        <p>
          {/* <img className="image" src={pic01} alt="" /> */}
          <Header headerImage={this.props.data.headerImage} />
          {this.props.childred()}
        </p>
      </div>

      <div className="content">
        <p>Brazilian Jiu-Jitsu + Gi + No-Gi + Kids + Conditioning</p>
        <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
export const pageQuery = graphql`
  query HeaderImageQuery {
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
