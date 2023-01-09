import Image from "next/image"
import { use } from "react"

import { fetchQueryAPI } from "../lib/api"
import Wysiwyg from "./Wysiwyg"

async function getData() {
  const res = await fetchQueryAPI(`
    query {
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

export default function Products() {
  const { product } = use(getData())

  return product ? (
    <div id="products" className="lg:scroll-mt-[120px]">
      <hr className="mb-14 h-2 border-0 bg-gradient-to-r from-neutral-900 via-primary to-neutral-900" />
      <div className="rounded-lg bg-neutral-800 p-5 text-white">
        <h2 className="font-heading text-5xl font-bold">{product.title}</h2>
        <Wysiwyg html={product.body} />
        <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {product.productItems.map((item) => {
            return (
              <Image
                className=""
                alt={item.responsiveImage.alt ?? ""}
                src={item.responsiveImage.src}
                width={item.responsiveImage.width}
                height={item.responsiveImage.height}
                placeholder="blur"
                blurDataURL={item.responsiveImage.base64}
              />
            )
          })}
        </div>
      </div>
    </div>
  ) : null
}
