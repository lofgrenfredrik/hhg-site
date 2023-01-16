import Link from "next/link"

import useNavbarContext from "../hooks/useNavbarContext"
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "./Icon"
import { WithTextLogo } from "./Logo"

export default function Footer({ contactInfo }) {
  const { eMail, phone, facebook, instagram, linkedin } = contactInfo
  const { bottomSentinelRef } = useNavbarContext()
  return (
    <footer className="relative flex flex-col bg-white pb-4">
      <div className="mx-auto flex w-full max-w-maximus flex-col items-center justify-between py-14 px-8 lg:flex-row">
        <div className="min-w-[300px]">
          <Link href="/">
            <span className="sr-only">To start page</span>
            <WithTextLogo className="mx-auto max-w-[120px] lg:mx-0" />
          </Link>
        </div>
        <div className="my-7 flex w-44 justify-between">
          <a
            href={facebook}
            rel="noopener noreferrer"
            target="_blank"
            title="To facebook profile"
            className="umami--click--footer-facebook w-12"
          >
            <span className="sr-only">To facebook profile</span>
            <FacebookIcon />
          </a>
          <a
            href={instagram}
            rel="noopener noreferrer"
            target="_blank"
            title="To instagram profile"
            className="umami--click--footer-instagram w-12"
          >
            <span className="sr-only">To instagram profile</span>
            <InstagramIcon />
          </a>
          <a
            href={linkedin}
            rel="noopener noreferrer"
            target="_blank"
            title="To linkedIn profile"
            className="umami--click--footer-linkedin w-12"
          >
            <span className="sr-only">To linkedIn profile</span>
            <LinkedInIcon />
          </a>
        </div>
        <div className="flex min-w-[300px] flex-col items-center lg:items-start">
          <h2 className="font-heading text-3xl font-bold">Contact</h2>
          <div className="mt-2">
            <span>{"Email: "}</span>
            <a className="font-bold" href={`mailto:${eMail}`}>
              {eMail}
            </a>
          </div>
          <div className="mt-2">
            <span>{"Phone: "}</span>
            <a className="font-bold" href={`tel:${phone}`}>
              {phone}
            </a>
          </div>
        </div>
      </div>
      <small className="mx-auto">
        &copy; Copyright {new Date().getFullYear()}, Henx Hospitality Group AB
      </small>
      <div ref={bottomSentinelRef} className="absolute bottom-0 z-50 h-12" />
    </footer>
  )
}
