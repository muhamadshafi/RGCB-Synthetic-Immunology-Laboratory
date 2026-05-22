import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-01',
  useCdn: false,
})

export async function GET() {

  const people = await client.fetch(`
    *[_type == "people"] | order(displayOrder asc) {

      _id,

      name,

      role,

      bio,

      isPI,

      displayOrder,

      "image": image.asset->url

    }
  `)

  return Response.json(people)
}