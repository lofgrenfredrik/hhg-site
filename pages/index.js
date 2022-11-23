// import type { GetStaticProps } from "next";
import { Image as DatoImage } from "react-datocms"

import { fetchQueryAPI } from "../lib/api"

function Home({ mainHero, about }) {
  console.log(mainHero, "<--- mainHero")
  const image = {
    ...mainHero.backgroundImage.responsiveImage,
    alt: "",
  }

  console.log(about)

  return (
    <div>
      <DatoImage
        style={{ height: "100vh" }}
        data={image}
        usePlaceholder={false}
        lazyLoad={false}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute flex h-screen w-screen items-center justify-center">
        <h1 className="text-9xl font-bold text-white"> YOLO</h1>
      </div>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const homeQuery = await fetchQueryAPI(`
      query {
        mainHero {
          title
          description
          backgroundImage {
            responsiveImage(imgixParams: {w: 1300}) {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
            }
          }
        }
        about {
          description
        }
      }
    `)
  console.log(homeQuery, "<----- YOLOOOOOO")
  return {
    props: { mainHero: homeQuery.mainHero, about: homeQuery.about },
  }
}
