import "tailwindcss/tailwind.css"

import { Open_Sans, Unna } from "@next/font/google"
import Link from "next/link"
import { Fragment } from "react"

import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../components/Icon"
import { WithTextLogo } from "../components/Logo"

const unna = Unna({ variable: "--font-unna", weight: ["400", "700"] })
const OpenSans = Open_Sans()

export default function Start({ Component, pageProps }) {
  const {
    contactInfo: { eMail, phone, facebook, instagram, linkedin },
  } = pageProps
  return (
    <Fragment>
      <main
        className={`${OpenSans.className} ${unna.variable} flex h-screen flex-col justify-between`}
      >
        <Component {...pageProps} />
      </main>
      <footer className="flex flex-col px-8 py-4 lg:px-12">
        <div className="flex flex-col items-center justify-between py-14 lg:flex-row">
          <div className="min-w-[300px]">
            <Link href="/">
              <span className="sr-only">To start page</span>
              <WithTextLogo className="max-w-[120px]" />
            </Link>
          </div>
          <div className="flex w-44 justify-between">
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
          <div className="min-w-[300px]">
            <h2 className={`${unna.className} text-3xl font-bold`}>Contact</h2>
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
      </footer>
    </Fragment>
  )
}
