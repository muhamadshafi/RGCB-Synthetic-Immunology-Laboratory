import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-01',
  useCdn: false,
})

export async function GET() {

  const homepage = await client.fetch(`
    *[_type == "homepage"][0]{

      title,

      subtitle,

      siteBackgroundColor,

      aboutTitle,

      aboutText,

      footerText,

      "heroImage": heroImage.asset->url,

      "heroVideo": heroVideo.asset->url,

      navbarBackgroundColor,

      navbarTextColor,

      "navbarBackgroundImage": navbarBackgroundImage.asset->url,

      "instituteLogo": instituteLogo.asset->url,

      linkedinLink,

      "fundingPartners": fundingPartners[]{
        "url": asset->url
      }

    }
  `)

  return Response.json(homepage)
}