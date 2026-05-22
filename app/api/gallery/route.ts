import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-01',
  useCdn: false,
})

export async function GET() {

  const gallery = await client.fetch(`
    *[_type == "gallery"]{

      _id,

      title,

      "cover": cover.asset->url,

      "video": video.asset->url,

      "images": images[]{
        "url": asset->url
      }

    }
  `)

  return Response.json(gallery)
}