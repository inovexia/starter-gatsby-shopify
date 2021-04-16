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
  NavDropdown,
} from 'react-bootstrap'
import HeaderData from './constants/header-data'
import GSIcon from './gs-icon'

const Header = () => {
  const headerData = HeaderData(),
    { topHeader, middleHeader, mainMenu } = headerData,
    isBrowser = typeof window !== 'undefined',
    context = useContext(StoreContext)

  useEffect(() => {
    if (isBrowser) {
    }
  }, [])

  return (
    <header>
      <div className={'top-header'}>
        <div className={'container-fluid'}>
          <div className={`d-flex`}>
            <div className={`flex-shrink-1 my-auto`}>
              <Link to={'/'} className={`logo`}>
                <GatsbyImage
                  image={topHeader.logo.childImageSharp.gatsbyImageData}
                  alt={'logo-image'}
                />
              </Link>
            </div>
            <div className={'flex-grow-1'}>
              <Form inline className={`search-box`}>
                <Button
                  variant="default"
                  className={'flex-shrink-1 btn-search'}
                  type="submit"
                >
                  <GSIcon icon={topHeader.searchIcon} />
                </Button>
                <FormControl
                  type={'text'}
                  placeholder={topHeader.searchPlaceholder}
                  className={`search-input flex-grow-1 border-0`}
                />
              </Form>
            </div>
            <div className={`flex-shrink-1`}>
              <ul className={`top-right-menu`}>
                <li>
                  <Link to={'/account'}>
                    <GSIcon icon={topHeader.userIcon} />
                    <span>My Account</span>
                  </Link>
                </li>
                <li>
                  <Link to={'/cart'}>
                    <GSIcon icon={topHeader.cartIcon} />
                    <span>Cart Items</span>
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
            <div className={`col`}>
              <div className={`contact-via`}>
                <ul>
                  <li>
                    <a href={`tel:${middleHeader.phoneNumber}`}>
                      <GSIcon icon={middleHeader.phoneIcon} />
                      <span>{middleHeader.phoneNumber}</span>
                    </a>
                  </li>
                  <li>
                    <a href={'https://maps.google.com/'}>
                      <GSIcon icon={middleHeader.loactionIcon} />
                      <span>{middleHeader.areaLocation}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`col-3`}>
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
        <div className={`container-fluid`}>
          <Navbar bg={'transparent'} className={'main-nav'} expand={'lg'}>
            <Navbar.Toggle />
            <Navbar.Collapse className={'main-menu'}>
              <Nav className={'nav-area'}>
                {mainMenu &&
                  mainMenu.map(({ link, label, subMenu }, i) => {
                    console.log(label, typeof subMenu)
                    return (
                      <Nav.Item key={i}>
                        {typeof subMenu === 'undefined' ? (
                          <Link className={'nav-link'} to={link}>
                            {label}
                          </Link>
                        ) : (
                          <NavDropdown title={label}>
                            {subMenu &&
                              subMenu.map(({ link, label }, j) => {
                                return (
                                  <NavDropdown.Item key={j}>
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
      </div>
    </header>
  )
}

export default Header
