import { Fragment } from "react"

import Hero from "../components/Hero"
import { fetchQueryAPI } from "../lib/api"

export default function Home({ mainHero }) {
  return (
    <Fragment>
      <Hero hero={mainHero} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const homeQuery = await fetchQueryAPI(`
      query {
        mainHero {
          title
          description
          backgroundImage {
            responsiveImage(imgixParams: {w: 1300}) {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
            }
          }
        }
        about {
          description
        }
        contactInfo {
          eMail
          facebook
          instagram
          linkedin
          phone
        }
      }
    `)
  return {
    props: {
      mainHero: homeQuery.mainHero,
      about: homeQuery.about,
      contactInfo: homeQuery.contactInfo,
    },
  }
}
