"use client"
import "swiper/swiper.min.css"
import "swiper/css/navigation"

import Image from "next/image"
import { Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Gallery({ gallery }) {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={3}
        loop={true}
        loopedSlides={20}
        modules={[Navigation]}
        navigation={true}
        slidesPerView={2}
        className="block md:hidden"
      >
        {gallery.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              alt={image.responsiveImage.alt ?? ""}
              src={image.responsiveImage.src}
              width={image.responsiveImage.width}
              height={image.responsiveImage.height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={3}
        loop={true}
        loopedSlides={20}
        modules={[Navigation]}
        navigation={true}
        slidesPerView={4}
        className="hidden md:block"
      >
        {gallery.map((image) => (
          <SwiperSlide key={image.id}>
            <Image
              alt={image.responsiveImage.alt ?? ""}
              src={image.responsiveImage.src}
              width={image.responsiveImage.width}
              height={image.responsiveImage.height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
