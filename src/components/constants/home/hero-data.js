import { graphql, useStaticQuery } from 'gatsby'

const HeroData = () => {
  const { bannerImage } = useStaticQuery(graphql`
    {
      bannerImage: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1226, height: 500)
        }
      }
    }
  `)

  return {
    banner: {
      heroImage: bannerImage
    },
    LeftData: {
      title: `First Title`,
      subtitle: `Subtitle`
    }
   
  }
}

export default HeroData
