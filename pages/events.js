import { Fragment } from "react"

import EventsList from "../components/EventsList"
import Hero from "../components/Hero"
import { fetchQueryAPI } from "../lib/api"

export default function Events({ hero, allEvents }) {
  return (
    <Fragment>
      <Hero hero={hero} />
      <div className="mx-auto flex max-w-maximus flex-col gap-8 py-8 lg:gap-14 lg:py-14">
        <EventsList allEvents={allEvents} />
      </div>
    </Fragment>
  )
}

export async function getServerSideProps() {
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
      allEvents {
        id
        title
        body
        gallery {
          id
          responsiveImage(imgixParams: {w: 300}) {
            src
            width
            height
            title
            base64
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

  return {
    props: {
      hero: res.eventsHero,
      allEvents: res.allEvents,
      contactInfo: res.contactInfo,
    },
  }
}
