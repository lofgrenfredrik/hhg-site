import { Image as DatoImage } from "react-datocms"

import Wysiwyg from "./Wysiwyg"

export default function Products({ products }) {
  return products ? (
    <div id="products" className="lg:scroll-mt-[120px]">
      <hr className="mb-14 h-2 border-0 bg-gradient-to-r from-neutral-900 via-primary to-neutral-900" />
      <div className="rounded-lg bg-neutral-800 p-5 text-white">
        <h2 className="font-heading text-5xl font-bold">{products.title}</h2>
        <Wysiwyg html={products.body} />
        <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {products.productItems.map((item) => {
            return <DatoImage key={item.responsiveImage.base64} data={item.responsiveImage} />
          })}
        </div>
      </div>
    </div>
  ) : null
}
