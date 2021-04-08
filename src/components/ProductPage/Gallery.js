import React, { useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const Gallery = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.images[0])

  return (
    <>
      <div
        width={[1 / 2, null, 0.5 / 5]}
        py={2}
        px={[2, null, 0]}
        order={[2, null, 1]}
      >
        <div width={1} aria-hidden style={{ overflow: 'auto' }}>
          <div>
            {product.images.map((x, i) =>
              currentImage === product.images[i] ? (
                <div
                  key={i}
                  style={{ marginBottom: '10px', border: '3px solid black' }}
                  width={['400px', null, 'auto']}
                  ml={[0, null, 2]}
                  mr={[2, null, 0]}
                  my={1}
                >
                  <GatsbyImage
                    image={x.localFile.childImageSharp.gatsbyImageData}
                    alt={product.title}
                    fadein={false.toString()}
                    loading="eager"
                    imgStyle={{
                      WebkitFilter: 'blur(1px)',
                      marginBorder: '10px solid black',
                    }}
                  />
                </div>
              ) : (
                <div
                  onMouseOver={() => setCurrentImage(product.images[i])}
                  onFocus={() => setCurrentImage(product.images[i])}
                  style={{ marginBottom: '10px' }}
                  key={i}
                  width={['400px', null, 'auto']}
                  ml={[0, null, 2]}
                  mr={[2, null, 0]}
                  my={1}
                  role="button"
                  tabIndex="0"
                >
                  <GatsbyImage
                    image={x.localFile.childImageSharp.gatsbyImageData}
                    fadein={false.toString()}
                    loading="eager"
                    durationFadeIn={500 * i}
                    alt={product.title}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div
        width={[5 / 5, null, 3 / 5]}
        style={{ margin: 'auto', marginTop: '0' }}
        ml="auto"
        py={2}
        px={[2, null, 3]}
        order={[1, null, 2]}
        className="img-hover-zoom--zoom-n-rotate img-hover-zoom"
      >
        <GatsbyImage
          image={currentImage.localFile.childImageSharp.gatsbyImageData}
          key={currentImage.localFile.id}
          alt={product.title}
          fadein={false.toString()}
          loading="eager"
          className="imgProduct"
        />
      </div>
    </>
  )
}

export default Gallery
