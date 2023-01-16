import { use } from "react"

import { fetchQueryAPI } from "../lib/api"
import Gallery from "./Gallery"
import Wysiwyg from "./Wysiwyg"

async function getData() {
  const res = await fetchQueryAPI(`
    query {
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
          }
        }
      }
    }
  `)

  return res
}

export default function EventsList() {
  const { allEvents } = use(getData())

  return allEvents.map((event) => (
    <div
      className="flex w-full flex-col  rounded-lg bg-neutral-800 p-5 text-white md:gap-8"
      key={event.id}
    >
      <h2 className="yolo font-heading text-3xl font-bold">{event.title}</h2>
      <Gallery gallery={event.gallery} />
      <Wysiwyg html={event.body} />
    </div>
  ))
}
