import "./globals.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Analytics } from "@vercel/analytics/react"
import { Open_Sans, Unna } from "next/font/google"

import Footer from "../components/Footer"
import { ContactModal } from "../components/modal"
import Nav from "../components/Nav"
import ContactModalProvider from "../context/ContactModalContext"
import NavbarProvider from "../context/NavbarContext"
import { getContactInfo } from "../lib/api-utils"

const unna = Unna({
  variable: "--font-unna",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
})

const opensans = Open_Sans({
  subsets: ["latin"],
})

export const metadata = {
  title: {
    default: "HHG",
    template: "%s - HHG",
  },
  description: "HHG site",
}

export default async function RootLayout({ children }) {
  // Fetch contact info at the layout level
  let contactInfo = {}

  try {
    contactInfo = await getContactInfo()
  } catch (error) {
    console.error("Failed to fetch contact info:", error)
  }

  return (
    <html lang="en">
      <body className={`${opensans.className} ${unna.variable} bg-neutral-900`}>
        <ContactModalProvider>
          <NavbarProvider>
            <main className="flex min-h-screen flex-col justify-between">
              <Nav />
              {children}
              <Footer contactInfo={contactInfo} />
              <ContactModal contactInfo={contactInfo} />
            </main>
            <Analytics />
          </NavbarProvider>
        </ContactModalProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
