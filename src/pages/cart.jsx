import React, { useContext } from 'react' /* eslint-disable */
import Layout from '../layouts'
import Seo from '../components/seo'
import StoreContext from '../context/store'
import Products from '../components/Cart/Products'
import Empty from '../components/Cart/Empty'

const Cart = () => {
  const context = useContext(StoreContext)
  const { checkout } = context
  return (
    <Layout>
      <Seo />
      <section className="hero is-large">
        <div className="hero-body">
          <div className="container">
            {checkout.lineItems.length !== 0 ? (
              <Products checkout={checkout} />
            ) : (
              <Empty />
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Cart
