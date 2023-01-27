import { Fragment } from "react"

import Hero from "../components/Hero"
import Partners from "../components/Partners"
import { fetchQueryAPI } from "../lib/api"

export default function Main({ hero, partner }) {
  return (
    <Fragment>
      <Hero hero={hero} />
      <Partners partners={partner} />
    </Fragment>
  )
}

export async function getServerSideProps() {
  const res = await fetchQueryAPI(`
    query {
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
      mainHero {
        title
        description
        backgroundImage {
          responsiveImage(imgixParams: {w: 1300}) {
            src
            width
            height
            alt
          }
        }
        pageSeo: _seoMetaTags {
          attributes
          content
          tag
        }
      }
      about {
        description
      }
      partner {
        title
        partnerLogos {
          id
          title
          responsiveImage(imgixParams: {w: 200}) {
            src
            width
            height
            title
          }
        }
      }
      contactInfo {
        eMail
        facebook
        instagram
        linkedin
        phone
        contactMessage
      }
    }
  `)

  const { pageSeo, ...hero } = res.mainHero
  const { favicon } = res.site

  return {
    props: {
      hero: hero,
      partner: res.partner,
      contactInfo: res.contactInfo,
      seo: [...pageSeo, ...favicon],
    },
  }
}
