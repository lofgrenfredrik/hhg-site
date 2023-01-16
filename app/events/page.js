import { Fragment } from "react"

import EventsList from "../../components/EventsList"
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
      <div className="mx-auto flex max-w-maximus flex-col gap-8 py-8 lg:gap-14 lg:py-14">
        <EventsList />
      </div>
    </Fragment>
  )
}
