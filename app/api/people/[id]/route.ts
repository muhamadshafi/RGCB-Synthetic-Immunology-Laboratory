import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-01',
  useCdn: false,
})

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {

  const { id } = await context.params

  const person = await client.fetch(
    `
    *[_type == "people" && _id == $id][0]{
      _id,
      name,
      role,
      bio,
      isPI,
      "image": image.asset->url
    }
    `,
    { id }
  )

  return Response.json(person)
}