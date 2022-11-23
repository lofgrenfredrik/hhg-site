const API_URL = "https://graphql.datocms.com"
const API_TOKEN = process.env.DATOCMS_API_TOKEN

export async function fetchQueryAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  if (preview) {
    console.log("PREVIEW!!!!")
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error("Failed to fetch API")
  }
  return json.data
}
