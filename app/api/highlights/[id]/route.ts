import {createClient} from '@sanity/client'

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

  const item = await client.fetch(
    `
    *[_type == "highlights" && _id == $id][0]{
      _id,
      title,
      content,
      "image": image.asset->url
    }
    `,
    { id }
  )

  return Response.json(item)
}