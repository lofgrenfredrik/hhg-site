import { Fragment } from "react"

import Footer from "./Footer"
import { ContactModal } from "./modal"
import Nav from "./Nav"

export default function RootLayout({ children, contactInfo }) {
  return (
    <Fragment>
      <Nav />
      {children}
      <Footer contactInfo={contactInfo} />
      <ContactModal contactInfo={contactInfo} />
    </Fragment>
  )
}
