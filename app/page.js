import About from "../components/About"
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import { fetchAPI } from "../lib/api-utils"
import { VideoPlayer, toNextMetadata } from "react-datocms"

export async function generateMetadata() {
  const { mainHero, site } = await fetchAPI(`
    query {
      mainHero {
        _seoMetaTags {
          attributes
          content
          tag
        }
      }
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
    }`)
  return toNextMetadata([...mainHero?._seoMetaTags, ...site.favicon] || [])
}

async function getHomeData() {
  const data = await fetchAPI(`
    query {
      mainHero {
        title
        description
        backgroundImage {
          responsiveImage(imgixParams: { w: 1300 }) {
            src
            width
            height
            alt
          }
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
          responsiveImage(imgixParams: { w: 200 }) {
            src
            width
            height
            title
          }
        }
      }
      mainVideo {
        video {
          video {
            # required: this field identifies the video to be played
            muxPlaybackId
            # all the other fields are not required but:
            # if provided, title is displayed in the upper left corner of the video
            title
            # if provided, width and height are used to define the aspect ratio of the
            # player, so to avoid layout jumps during the rendering.
            width
            height
            # if provided, it shows a blurred placeholder for the video
            blurUpThumb
          }
        }
      }
    }
  `)

  return data
}

export default async function Home() {
  const { mainHero, about, partner, mainVideo } = await getHomeData()

  return (
    <>
      <Hero hero={mainHero} />
      {mainVideo ? (
        <div className="mx-auto w-full max-w-maximus px-3 py-8 md:p-8">
          <VideoPlayer data={mainVideo.video.video} thumbnailTime={2} />
        </div>
      ) : null}

      {about ? <About about={about.description} /> : null}
      <Partners partners={partner} />
    </>
  )
}
