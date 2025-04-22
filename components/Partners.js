import Image from "next/image"

export default function Partners({ partners }) {
  return (
    <section className="mx-auto w-full max-w-maximus px-3 py-8 text-zinc-50  md:p-8">
      <h2 className="font-heading text-3xl font-bold">{partners.title}</h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(120px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5 pt-8 md:partners-md lg:partners-lg">
        {partners.partnerLogos.map((partner) => (
          <div
            key={partner.id}
            className="flex items-center justify-center rounded-lg bg-white p-4"
          >
            <Image
              src={partner.responsiveImage.src}
              alt={partner.responsiveImage.title}
              width={partner.responsiveImage.width}
              height={partner.responsiveImage.height}
              title={partner.responsiveImage.title}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
