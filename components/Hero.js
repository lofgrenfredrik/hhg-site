import Image from "next/image"
import { Fragment } from "react"

import { SimpleLogo } from "./Logo"

export default function Home({ hero }) {
  const { title, description, backgroundImage } = hero
  const { src, height, width, alt } = backgroundImage.responsiveImage

  return (
    <Fragment>
      <Image
        className="h-screen w-screen object-cover"
        priority
        alt={alt}
        src={src}
        width={width}
        height={height}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
        <div className="flex w-full max-w-maximus flex-col-reverse items-center justify-center gap-4 lg:flex-row lg:justify-between">
          <div className="max-w-lg flex-1 text-center text-white lg:text-left">
            <h1 className="font-heading text-5xl font-bold">{title}</h1>
            <p className="mt-4 text-lg">{description}</p>
          </div>
          <div className="w-3/5 max-w-sm flex-1">
            <SimpleLogo className="h-full w-full fill-white " />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
