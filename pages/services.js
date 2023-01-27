import { Fragment } from "react"

import Hero from "../components/Hero"
import Products from "../components/Products"
import ServicesList from "../components/ServicesList"
import { fetchQueryAPI } from "../lib/api"

export default function Services({ hero, allServices, products }) {
  return (
    <Fragment>
      <Hero hero={hero} />
      <div className="mx-auto flex max-w-maximus flex-col gap-8 py-8 lg:gap-14 lg:py-14">
        <ServicesList allServices={allServices} />
        <Products products={products} />
      </div>
    </Fragment>
  )
}

export async function getServerSideProps() {
  const res = await fetchQueryAPI(`
    query {
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
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
        pageSeo: _seoMetaTags {
          attributes
          content
          tag
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

  const { pageSeo, ...hero } = res.servicesHero
  const { favicon } = res.site

  return {
    props: {
      hero: hero,
      allServices: res.allServices,
      contactInfo: res.contactInfo,
      products: res.product,
      seo: [...pageSeo, ...favicon],
    },
  }
}
