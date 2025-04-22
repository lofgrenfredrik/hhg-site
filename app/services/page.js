import Hero from "../../components/Hero"
import Products from "../../components/Products"
import ServicesList from "../../components/ServicesList"
import { fetchAPI } from "../../lib/api-utils"

export const metadata = {
  title: "Services",
}

async function getServicesData() {
  const data = await fetchAPI(`
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
      allServices {
        id
        title
        body
        image {
          id
          responsiveImage(imgixParams: {w: 200}) {
            src
            width
            height
            title
          }
        }
      }
      product {
        id
        title
        body
        productItems {
          id
          responsiveImage(imgixParams: {w: 900 }) {
            src
            width
            height
            alt
            src
            sizes
            srcSet
            base64
          }
        }
      }
    }
  `)

  return data
}

export default async function Services() {
  const { servicesHero, allServices, product } = await getServicesData()

  return (
    <>
      <Hero hero={servicesHero} />
      <div className="mx-auto flex max-w-maximus flex-col gap-8 px-3 py-8 md:p-8 lg:gap-14 lg:py-14">
        <ServicesList allServices={allServices} />
        <Products products={product} />
      </div>
    </>
  )
}
