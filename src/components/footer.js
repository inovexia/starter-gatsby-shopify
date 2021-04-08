import React from 'react'

const Footer = () => {
  return (
    <footer className="footer" style={{ padding: '3rem 1.5rem 2rem' }}>
      <div className="content has-text-centered">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <p>
                © 2020 - Gatsby x Shopify by{' '}
                <a
                  href="https://github.com/4nkit-5hukla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ankit Shukla
                </a>
              </p>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/4nkit-5hukla/starter-gatsby-shopify"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
