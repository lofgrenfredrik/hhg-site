"use client"

import Link from "next/link"
import { Fragment } from "react"
import { Image as DatoImage } from "react-datocms"

import useNavbarContext from "../hooks/useNavbarContext"
import { SimpleLogo } from "./Logo"

export default function Home({ hero }) {
  const { title, description, backgroundImage } = hero
  const { topSentinelRef } = useNavbarContext()
  return (
    <div className="grid">
      <div ref={topSentinelRef} className="absolute top-0 h-28" />
      <DatoImage
        className="h-screen w-screen row-span-full col-span-full"
        objectFit="cover"
        priority
        data={backgroundImage.responsiveImage}
      />

      <div className="bg-black/40 row-span-full col-span-full z-10" />

      <div className="flex flex-col-reverse items-center justify-center gap-4 lg:flex-row lg:justify-between row-span-full col-span-full mx-auto w-full max-w-maximus px-3 py-8 md:p-8 z-20">
        <div className="max-w-lg flex-1 text-center text-white lg:text-left">
          <h1 className="font-heading text-5xl font-bold">{title}</h1>
          <p className="mt-4 text-lg">{description}</p>
        </div>
        <Link href="/" className="w-3/5 max-w-sm flex-1">
          <span className="sr-only">To start page</span>
          <SimpleLogo className="h-full w-full fill-white" />
        </Link>
      </div>
    </div>
  )
}
