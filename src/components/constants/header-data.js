import { graphql, useStaticQuery } from 'gatsby'

const HeaderData = () => {
  const { logoImage } = useStaticQuery(graphql`
    {
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(width: 155, height: 30)
        }
      }
    }
  `)

  return {
    topHeader: {
      siteUrl: `/`,
      logo: logoImage,
      searchIcon: `gs-search`,
      userIcon: `gs-user`,
      cartIcon: `gs-shopping-cart`,
      searchPlaceholder: `WHAT ARE YOU LOOKING FOR?`,
      myAccountText: `My Account`,
      cartItems: `Cart Items`,
    },

    middleHeader: {
      phoneIcon: `gs-phone`,
      loactionIcon: `gs-map-pin`,
      phoneNumber: `888-841-0905`,
      areaLocation: `lorem ipsum`,
      offer: `FREE Shipping over $499`,
    },
    mainMenu: [
      {
        link: `/`,
        label: `All Mattresses`,
      },
      {
        link: `/`,
        label: `Why Us?`,
      },
      {
        link: `/`,
        label: `Brands`,
        subMenu: [
          {
            link: `#`,
            label: `Brand 1`,
          },
          {
            link: `/`,
            label: `Brand 2`,
          },
          {
            link: `/`,
            label: `Brand 3`,
          },
        ],
      },
      {
        link: `/`,
        label: `Furniture`,
        subMenu: [
          {
            link: `/`,
            label: `F 1`,
          },
          {
            link: `/`,
            label: `F 2`,
          },
          {
            link: `/`,
            label: `F 3`,
          },
        ],
      },
      {
        link: `/`,
        label: `Accessories`,
      },
      {
        link: `/`,
        label: `Coupons`,
      },
      {
        link: `/`,
        label: `Blogs`,
      },
      {
        link: `/`,
        label: `Mattress Match maker`,
      },
    ],
  }
}

export default HeaderData
