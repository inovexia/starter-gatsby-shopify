import React, {
  useContext,
  useState,
  useEffect,
} from 'react' /* eslint-disable */
import { Link } from 'gatsby'
import Seo from '../components/seo'
import { graphql } from 'gatsby'
import ProductInfo from '../components/ProductPage/ProductInfo'
import StoreContext from '../context/store'
import VariantSelectors from '../components/ProductPage/VariantSelectors'
import QuantityButton from '../components/ProductPage/QuantityButton'
import Buttons from '../components/ProductPage/Buttons'
import Gallery from '../components/ProductPage/Gallery'

const productPage = ({ data }) => {
  const context = useContext(StoreContext)
  const product = data.shopifyProduct
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState(product.variants[0])
  const productVariant =
    context.client.product.helpers.variantForOptions(product, variant) ||
    variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  useEffect(() => {
    let defaultOptionValues = {}
    product.options.forEach(selector => {
      defaultOptionValues[selector.name] = selector.values[0]
    })
    setVariant(defaultOptionValues)
  }, [])

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [productVariant])

  const checkAvailability = productId => {
    context.client.product.fetch(productId).then(product => {
      // this checks the currently selected variant for availability
      const result = product.variants.filter(
        variant => variant.id === productVariant.shopifyId
      )
      setAvailable(result[0].available)
    })
  }

  const handleOptionChange = event => {
    const { target } = event
    setVariant(prevState => ({
      ...prevState,
      [target.name]: target.value,
      ...console.log(variant),
    }))
  }

  return (
    <>
      <Seo title={product.title} />
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body" style={{ display: 'block' }}>
          <div className="container">
            <div>
              <Gallery product={product} />
              <div>
                <div>
                  <ProductInfo product={product} />
                  <div className="columns">
                    {product.options.map((options, i) => {
                      return (
                        <div className="column" key={i}>
                          <VariantSelectors
                            onChange={handleOptionChange}
                            options={options}
                          />
                        </div>
                      )
                    })}
                    <div className="column is-3">
                      <QuantityButton
                        quantity={quantity}
                        setQuantity={setQuantity}
                      />
                    </div>
                  </div>
                  <br />

                  <Buttons
                    context={context}
                    available={available}
                    quantity={quantity}
                    productVariant={productVariant}
                  />
                  <hr />
                  <div
                    key={`body`}
                    id="content"
                    className="content"
                    dangerouslySetInnerHTML={{
                      __html: product.descriptionHtml,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container has-text-centered">
            <Link className="is-medium button" to="/">
              {' '}
              ← Back to the Store
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default productPage

export const query = graphql`
  query($id: String!) {
    shopifyProduct(handle: { eq: $id }) {
      handle
      id
      title
      handle
      productType
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
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
    }
  }
`
