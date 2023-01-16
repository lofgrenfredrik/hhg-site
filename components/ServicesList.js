import { Image as DatoImage } from "react-datocms"

import Wysiwyg from "./Wysiwyg"

export default function ServicesList({ allServices }) {
  return allServices.map((service) => (
    <div className="flex w-full  rounded-lg bg-neutral-800 p-5 text-white md:gap-8">
      <DatoImage data={service.image.responsiveImage} />
      <div>
        <h2 className="font-heading text-3xl font-bold">{service.title}</h2>
        <Wysiwyg html={service.body} />
      </div>
    </div>
  ))
}
