import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-01',
  useCdn: false,
})

export async function GET() {

  const publications = await client.fetch(`
    *[_type == "publications"]{
      _id,
      title,
      journal,
      year,
      link
    }
  `)

  return Response.json(publications)
}