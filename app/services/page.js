import { Fragment } from "react"

import Hero from "../../components/Hero"
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

  return res
}

export default async function Services() {
  const { servicesHero, product } = await getData()

  return (
    <Fragment>
      <Hero hero={servicesHero} />
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-white">SERVICES</h1>
      </div>
      {product ? (
        <div id="products" className="mx-auto max-w-maximus lg:scroll-mt-[120px]">
          <hr className="my-10 h-2 border-0 bg-gradient-to-r from-slate-900 via-primary to-slate-900" />
          <div className="rounded-lg bg-slate-800 p-5 text-white">
            <h2 className="font-heading text-5xl font-bold">{product.title}</h2>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {product.productItems.map((item) => {
                console.log(item.responsiveImage.src, "<--- SRE")
                return (
                  // <Image
                  //   className=""
                  //   alt={item.responsiveImage.alt ?? ""}
                  //   src={item.responsiveImage.src}
                  //   width={item.responsiveImage.width}
                  //   height={item.responsiveImage.height}
                  //   placeholder="blur"
                  //   blurDataURL={item.responsiveImage.base64}
                  // />
                  <img {...item.responsiveImage} loading="lazy" />
                )
              })}
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  )
}
