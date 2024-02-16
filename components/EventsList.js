import Gallery from "./GalleryLeaf"
import Wysiwyg from "./Wysiwyg"

export default function EventsList({ allEvents }) {
  return allEvents.map((event) => (
    <section
      className="flex w-full flex-col  rounded-lg bg-neutral-800 p-5 text-white md:gap-8"
      key={event.id}
    >
      <h2 className="yolo font-heading text-3xl font-bold">{event.title}</h2>
      <Gallery gallery={event.gallery} />
      <Wysiwyg html={event.body} />
    </section>
  ))
}
