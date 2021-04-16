import React, { useContext, useState, useEffect } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import StoreContext from '../../../context/store'
import { Link} from 'gatsby'
import {
  Row,
  Col
} from 'react-bootstrap'
import HeroData from '../../../components/constants/home/hero-data'

const Hero = () => {
  const heroData = HeroData(),
    { banner, leftData} = heroData,
    isBrowser = typeof window !== 'undefined',
    context = useContext(StoreContext)

  useEffect(() => {
    if (isBrowser) {
    }
  }, [])
  

    return(
      <section className={`banner-section`}>
        <div className={`container-fluid`} >
            <div className={`banner`}>
              <GatsbyImage
                  image={banner.heroImage.childImageSharp.gatsbyImageData}
                  alt={'Hero Image'}
                />
              <div className={'row'}>
                <Col className={'col-12 col-md-9'}>Left</Col>
                <Col className={'col-12 col-md-3'}>Right</Col>
              </div>
                <h1>Hello</h1>
            </div>
        </div>
      </section>
    )
}

export default Hero
