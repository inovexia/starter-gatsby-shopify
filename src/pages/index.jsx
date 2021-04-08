import React from 'react'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import ProductList from '../components/productList'
import Layout from '../layouts'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <ProductList data={data} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          id
          title
          handle
          createdAt(fromNow: true)
          publishedAt
          productType
          vendor
          priceRange {
            maxVariantPrice {
              amount
            }
          }
          images {
            originalSrc
            id
            localFile {
              childImageSharp {
                gatsbyImageData(width: 910)
              }
            }
          }
          variants {
            id
            title
            price
          }
        }
      }
    }
  }
`
