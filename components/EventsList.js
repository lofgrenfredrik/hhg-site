import GalleryCarousel from "./GalleryCarousel"
import Wysiwyg from "./Wysiwyg"

export default function EventsList({ allEvents }) {
  return allEvents.map((event) => (
    <section
      className="flex w-full flex-col  rounded-lg bg-neutral-800 p-5 text-white md:gap-8"
      key={event.id}
    >
      <h2 className="font-heading text-3xl font-bold">{event.title}</h2>
      <div className="min-h-[300px] w-full">
        <GalleryCarousel gallery={event.gallery} />
      </div>
      <Wysiwyg html={event.body} />
    </section>
  ))
}
