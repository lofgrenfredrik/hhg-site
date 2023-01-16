import { Fragment } from "react"

import Hero from "../components/Hero"
import Partners from "../components/Partners"
import { fetchQueryAPI } from "../lib/api"

export default function Page({ hero, partner }) {
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

  return { props: { hero: res.mainHero, partner: res.partner, contactInfo: res.contactInfo } }
}
