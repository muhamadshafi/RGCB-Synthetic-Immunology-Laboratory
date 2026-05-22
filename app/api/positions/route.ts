import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-01',
  useCdn: false,
})

export async function GET() {

  const positions = await client.fetch(`
    *[_type == "positions"] | order(deadline asc) {

      _id,

      title,

      deadline,

      description,

      applyLink

    }
  `)

  return Response.json(positions)
}