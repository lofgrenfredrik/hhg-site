import About from "../components/About"
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import { fetchAPI } from "../lib/api-utils"

export const metadata = {
  title: "Home",
}

async function getHomeData() {
  const data = await fetchAPI(`
    query {
      mainHero {
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
      about {
        description
      }
      partner {
        title
        partnerLogos {
          id
          title
          responsiveImage(imgixParams: {w: 200}) {
            src
            width
            height
            title
          }
        }
      }
    }
  `)

  return data
}

export default async function Home() {
  const { mainHero, about, partner } = await getHomeData()

  return (
    <>
      <Hero hero={mainHero} />
      <h1>APP</h1>
      {about ? <About about={about.description} /> : null}
      <Partners partners={partner} />
    </>
  )
}
