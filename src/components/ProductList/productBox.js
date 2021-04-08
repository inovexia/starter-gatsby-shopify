import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProductBox = props => {
  const product = props.product
  return (
    <div className="box productBox" key={product.node.title}>
      <Link to={`/product/${product.node.handle}`}>
        <GatsbyImage
          image={
            product.node.images[0].localFile.childImageSharp.gatsbyImageData
          }
          key={product.node.images[0].localFile.id}
          fadein={false.toString()}
          loading="eager"
          alt={product.node.title}
        />
        <p className="has-text-weight-semibold has-text-black">
          {product.node.title}
        </p>
        <p className="has-text-weight-light has-text-grey-dark">
          ${product.node.variants[0].price}
        </p>
      </Link>
    </div>
  )
}

export default ProductBox
