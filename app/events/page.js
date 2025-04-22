import EventsList from "../../components/EventsList"
import Hero from "../../components/Hero"
import { fetchAPI } from "../../lib/api-utils"

export const metadata = {
  title: "Events",
}

async function getEventsData() {
  const data = await fetchAPI(`
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
    }
  `)

  return data
}

export default async function Events() {
  const { eventsHero, allEvents } = await getEventsData()

  return (
    <>
      <Hero hero={eventsHero} />
      <div className="mx-auto flex w-full max-w-maximus flex-col gap-8 px-3 py-8 md:p-8 lg:gap-14 lg:py-14">
        <EventsList allEvents={allEvents} />
      </div>
    </>
  )
}
