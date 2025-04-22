"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

import useContactModalContext from "../hooks/useContactModalContext"
import useNavbarContext from "../hooks/useNavbarContext"
import { SimpleLogo } from "./Logo"

export default function Nav() {
  const {
    actions: { openContactModal },
  } = useContactModalContext()

  const router = usePathname()
  const { topSentinelInView, bottomSentinelInView } = useNavbarContext()

  return (
    <nav
      className={clsx({
        "fixed bottom-0 z-50 w-full  px-6  transition-all duration-500 ease-in-out lg:top-0 lg:bottom-auto lg:px-12": true,
        "bg-transparent py-5": topSentinelInView,
        "bg-white py-3 shadow-[0_4px_24px_-3px_rgb(0,0,0)] lg:shadow-none": !topSentinelInView,
        "translate-y-[130%] lg:translate-y-0": bottomSentinelInView,
      })}
    >
      <div className="mx-auto flex max-w-maximus items-center justify-between text-xl">
        <Link className="hidden lg:block" href="/">
          <span className="sr-only">Home</span>
          <SimpleLogo className={clsx({ "w-20": true, "fill-transparent": topSentinelInView })} />
        </Link>
        <div
          className={clsx({
            "flex w-full max-w-none justify-around lg:max-w-[350px] lg:justify-between": true,
            "border-white text-slate-50": topSentinelInView,
            "border-black text-black": !topSentinelInView,
          })}
        >
          <Link
            className={`p-3 ${router === "/services" ? "border-b-2 border-inherit" : ""}`}
            href="/services"
          >
            Services
          </Link>
          <Link
            className={`p-3 ${router === "/events" ? "border-b-2 border-inherit" : ""}`}
            href="/events"
          >
            Events
          </Link>
          <button
            onClick={openContactModal}
            className={clsx({
              "umami--click--contact-button rounded-md border-2 border-solid border-primary px-5 font-bold text-inherit  hover:bg-primaryLighter hover:text-black": true,
              "bg-transparent": topSentinelInView,
              "bg-primary": !topSentinelInView,
            })}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}
