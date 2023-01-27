const API_URL = "https://graphql.datocms.com"
const API_TOKEN = process.env.DATOCMS_API_TOKEN
const PREVIEW = process.env.PREVIEW

export async function fetchQueryAPI(query, { variables } = {}) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  }

  if (PREVIEW === "true") {
    headers["X-Include-Drafts"] = "true"
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error("Failed to fetch API")
  }
  return json.data
}
