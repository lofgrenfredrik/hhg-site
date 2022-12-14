import "./globals.css"

import { Open_Sans, Unna } from "@next/font/google"

import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { fetchQueryAPI } from "../lib/api"

const unna = Unna({ variable: "--font-unna", weight: ["400", "700"] })
const OpenSans = Open_Sans()

async function getData() {
  const res = await fetchQueryAPI(`
  query{
    contactInfo {
      eMail
      facebook
      instagram
      linkedin
      phone
    }
  }
  `)

  return res
}

export default async function RootLayout({ children }) {
  const { contactInfo } = await getData()

  return (
    <html lang="en" className={`${OpenSans.className} ${unna.variable}`}>
      <body>
        <Nav />
        <main className="flex min-h-screen flex-col justify-between bg-slate-900">{children}</main>
        <Footer contactInfo={contactInfo} />
      </body>
    </html>
  )
}
