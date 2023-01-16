import "./globals.css"

import { Open_Sans, Unna } from "@next/font/google"

import Layout from "../components/layout"
import ContactModalContext from "../context/ContactModalContext"
import NavbarContext from "../context/NavbarContext"

const unna = Unna({
  variable: "--font-unna",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})
const opensans = Open_Sans({
  subsets: ["latin"],
})

export default function MyApp({ Component, pageProps }) {
  return (
    <ContactModalContext>
      <NavbarContext>
        <main
          className={`${opensans.className} ${unna.variable} flex min-h-screen flex-col justify-between bg-neutral-900`}
        >
          <Layout contactInfo={pageProps.contactInfo}>
            <Component {...pageProps} />
          </Layout>
        </main>
      </NavbarContext>
    </ContactModalContext>
  )
}
