import "./globals.css"

import { Open_Sans, Unna } from "@next/font/google"
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { renderMetaTags } from "react-datocms"

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
  const router = useRouter()
  let pageSEO = pageProps?.seo

  if (router.pathname !== "/") {
    pageSEO = pageProps?.seo?.map((s) => {
      if (s.tag === "title") {
        return { ...s, content: `${s.content} - HHG` }
      }
      return s
    })
  }
  return (
    <ContactModalContext>
      <NavbarContext>
        <Head>{renderMetaTags(pageSEO ?? [])}</Head>
        <main
          className={`${opensans.className} ${unna.variable} flex min-h-screen flex-col justify-between bg-neutral-900`}
        >
          <Layout contactInfo={pageProps.contactInfo ?? {}}>
            <Component {...pageProps} />
          </Layout>
        </main>
        <Analytics />
      </NavbarContext>
    </ContactModalContext>
  )
}
