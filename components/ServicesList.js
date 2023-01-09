import Image from "next/image"
import { use } from "react"

import { fetchQueryAPI } from "../lib/api"
import Wysiwyg from "./Wysiwyg"

async function getData() {
  const res = await fetchQueryAPI(`
    query {
      allServices {
        id
        title
        body
        image {
          id
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

export default function ServicesList() {
  const { allServices } = use(getData())

  return allServices.map((service) => (
    <div className="flex w-full  rounded-lg bg-neutral-800 p-5 text-white md:gap-8">
      <Image
        className="hidden object-cover md:block"
        priority
        alt={service.image.responsiveImage.alt ?? ""}
        src={service.image.responsiveImage.src}
        width={service.image.responsiveImage.width}
        height={service.image.responsiveImage.height}
      />
      <div>
        <h2 className="font-heading text-3xl font-bold">{service.title}</h2>
        <Wysiwyg html={service.body} />
      </div>
    </div>
  ))
}
