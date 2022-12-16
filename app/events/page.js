import { Fragment } from "react"

import Hero from "../../components/Hero"
import { fetchQueryAPI } from "../../lib/api"

async function getData() {
  const res = await fetchQueryAPI(`
    query {
      eventsHero {
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
    }
  `)

  return res
}

export default async function Events() {
  const { eventsHero } = await getData()
  return (
    <Fragment>
      <Hero hero={eventsHero} />
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-white">EVENTS</h1>
      </div>
    </Fragment>
  )
}
