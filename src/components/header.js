import React, { useContext, useState, useEffect } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import StoreContext from '../context/store'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Collapse,
  Toggle,
  NavDropdown,
} from 'react-bootstrap'
import HeaderData from './constants/header-data'
import GSIcon from './gs-icon'

const Header = ({ siteTitle }) => {
  const headerData = HeaderData(),
    { topHeader, middleHeader, mainMenu } = headerData,
    isBrowser = typeof window !== 'undefined',
    context = useContext(StoreContext)

  useEffect(() => {
    if (isBrowser) {
    }
  }, [])

  console.log(topHeader, middleHeader, mainMenu)

  return (
    <header>
      <div className={'top-header'}>
        <div className={'container-fluid'}>
          <div className={`row`}>
            <div className={`col d-flex`}>
              <div className={`brand`}>
                <Link to={'/'} className={`logo d-inline-block`}>
                  <GatsbyImage
                    image={topHeader.logo.childImageSharp.gatsbyImageData}
                  />
                </Link>
              </div>
              <div className={`search-box`}>
                <span>
                  <GSIcon icon={topHeader.searchIcon} />
                </span>
                <Form inline>
                  <FormControl
                    type={'text'}
                    placeholder={topHeader.searchPlaceholder}
                    className={`pdt-search`}
                  />
                </Form>
              </div>
            </div>
            <div className={`col top-right-menu`}>
              <ul className={`d-flex`}>
                <li>
                  <Link to={'/'} className={`my-account`}>
                    <span>
                      <GSIcon icon={topHeader.userIcon} />
                    </span>
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to={'/'} className={`cart`}>
                    <span>
                      <GSIcon icon={topHeader.cartIcon} />
                    </span>
                    Cart Items
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={'middle-header'}>
        <div className={`container-fluid`}>
          <div className={`row`}>
            <div className={`col col-6`}>
              <div className={`contact-via`}>
                <ul>
                  <li>
                    <a href={`tel:${middleHeader.phoneNumber}`}>
                      <span>
                        <GSIcon icon={middleHeader.phoneIcon} />
                      </span>
                      {middleHeader.phoneNumber}
                    </a>
                  </li>
                  <li>
                    <a href={'https://maps.google.com/'}>
                      <span>
                        <GSIcon icon={middleHeader.loactionIcon} />
                      </span>
                      {middleHeader.areaLocation}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`col col-6`}>
              <div className={`offer`}>
                <p className={`text-left text-md-right`}>
                  {middleHeader.offer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'bottom-header'}>
        <Navbar bg={'light'} expand={'lg'}>
          <Navbar.Toggle aria-controls={'basic-navbar-nav'} />
          <Navbar.Collapse id={'basic-navbar-nav'}>
            <Nav className="">
              {mainMenu &&
                mainMenu.map(({ link, label, subMenu }, index) => {
                  console.log(label, typeof subMenu)
                  return (
                    <Nav.Item key={index} className={''}>
                      {typeof subMenu === 'undefined' ? (
                        <Link className={'nav-link'} to={link}>
                          {label}
                        </Link>
                      ) : (
                        <NavDropdown title={label}>
                          {subMenu &&
                            subMenu.map(({ link, label }, index) => {
                              return (
                                <NavDropdown.Item className={''}>
                                  <Link className={'nav-link'} to={link}>
                                    {label}
                                  </Link>
                                </NavDropdown.Item>
                              )
                            })}
                        </NavDropdown>
                      )}
                    </Nav.Item>
                  )
                })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  )
}

export default Header
