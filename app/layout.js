import "./globals.css"

import { Open_Sans, Unna } from "@next/font/google"

import Footer from "../components/Footer"
import { ContactModal } from "../components/modal"
import Nav from "../components/Nav"
import ContactModalContext from "../context/ContactModalContext"
import NavbarContext from "../context/NavbarContext"
import { fetchQueryAPI } from "../lib/api"

const unna = Unna({
  variable: "--font-unna",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})
const opensans = Open_Sans({
  subsets: ["latin"],
})

async function getData() {
  const res = await fetchQueryAPI(`
  query{
    contactInfo {
      eMail
      facebook
      instagram
      linkedin
      phone
      contactMessage
    }
  }
  `)

  return res
}

export default async function RootLayout({ children }) {
  const { contactInfo } = await getData()

  return (
    <html lang="en" className={`${opensans.className} ${unna.variable}`}>
      <body>
        <ContactModalContext>
          <NavbarContext>
            <Nav />
            <main className="flex min-h-screen flex-col justify-between bg-slate-900">
              {children}
            </main>
            <Footer contactInfo={contactInfo} />
            <ContactModal contactInfo={contactInfo} />
          </NavbarContext>
        </ContactModalContext>
      </body>
    </html>
  )
}
