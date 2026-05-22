import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-01',
  useCdn: false,
})

export async function GET() {

  const research = await client.fetch(`
    *[_type == "research"] | order(publicationDate desc){

      _id,

      title,

      description,

      publicationDate,

      link

    }
  `)

  return Response.json(research)
}