import { Fragment, use } from "react"

import Hero from "../../components/Hero"
import Products from "../../components/Products"
import ServicesList from "../../components/ServicesList"
import { fetchQueryAPI } from "../../lib/api"

async function getData() {
  const res = await fetchQueryAPI(`
    query {
      servicesHero {
        title
        description
        backgroundImage {
          responsiveImage(imgixParams: {w: 1300}) {
            src
            width
            height
            alt
          }
        }
      }
    }
  `)

  return res
}

export default function Services() {
  const { servicesHero } = use(getData())

  return (
    <Fragment>
      <Hero hero={servicesHero} />
      <div className="mx-auto flex max-w-maximus flex-col gap-8 py-8 lg:gap-14 lg:py-14">
        <ServicesList />
        <Products />
      </div>
    </Fragment>
  )
}
