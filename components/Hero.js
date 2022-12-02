import { Fragment } from "react"
import { Image as DatoImage } from "react-datocms"

import { SimpleLogo } from "../components/Logo"

export default function Home({ hero }) {
  const { title, description, backgroundImage } = hero
  const image = {
    ...backgroundImage.responsiveImage,
    alt: "",
  }

  return (
    <Fragment>
      <DatoImage
        className="h-screen w-screen"
        data={image}
        usePlaceholder={false}
        lazyLoad={false}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute h-screen w-screen bg-black/40" />
      <div className="absolute flex h-screen w-screen items-center justify-center p-8 lg:p-12">
        <div className="flex w-maximus flex-col-reverse items-center justify-center gap-4 lg:flex-row lg:justify-between">
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
