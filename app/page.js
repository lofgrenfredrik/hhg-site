import { Fragment } from "react"

import Hero from "../components/Hero"
import Partners from "../components/Partners"
import { fetchQueryAPI } from "../lib/api"

async function getData() {
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
    }
  `)

  return res
}

export default async function Page() {
  const { mainHero, partner } = await getData()
  return (
    <Fragment>
      <Hero hero={mainHero} />
      <Partners partners={partner} />
    </Fragment>
  )
}
