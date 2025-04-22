const API_URL = "https://graphql.datocms.com"
const API_TOKEN = process.env.DATOCMS_API_TOKEN
const PREVIEW = process.env.PREVIEW

export async function fetchAPI(query, { variables } = {}) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  }

  if (PREVIEW === "true") {
    headers["X-Include-Drafts"] = "true"
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: 60 }, // Revalidate at most once every 60 seconds
    })

    const json = await res.json()

    if (json.errors) {
      console.error(json.errors)
      throw new Error("Failed to fetch API")
    }

    return json.data
  } catch (error) {
    console.error("Error fetching from API:", error)
    throw new Error("Failed to fetch from API")
  }
}

export async function getContactInfo() {
  const data = await fetchAPI(`
    query {
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

  return data.contactInfo
}

export async function getSiteMetadata() {
  const data = await fetchAPI(`
    query {
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
    }
  `)

  return data.site
}
