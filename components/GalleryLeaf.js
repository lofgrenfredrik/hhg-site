"use client"

import loadable from "@loadable/component"
import { Image as DatoImage } from "react-datocms"
const InfiniteCarousel = loadable(() => import("react-leaf-carousel"))

export default function Gallery({ gallery }) {
  return (
    <div className="w-full">
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              showSides: false,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              showSides: false,
            },
          },
        ]}
        scrollOnDevice
        showSides
        sideSize={0.2}
        sidesOpacity={0.3}
        slidesSpacing={1}
        slidesToShow={4}
      >
        {gallery.map((image) => (
          <DatoImage key={image.responsiveImage.base64} data={image.responsiveImage} />
        ))}
      </InfiniteCarousel>
    </div>
  )
}
