import Navbar from '../components/Navbar'

async function getHomepage() {

  const res = await fetch(
    '${process.env.NEXT_PUBLIC_SITE_URL}/api/homepage',
    { cache: 'no-store' }
  )

  return res.json()
}

async function getPublications() {

  const res = await fetch(
    '${process.env.NEXT_PUBLIC_SITE_URL}/api/publications',
    { cache: 'no-store' }
  )

  return res.json()
}

export default async function PublicationsPage() {

  const homepage = await getHomepage()

  const publications = await getPublications()

  return (

    <main
      style={{
        background:
          homepage?.siteBackgroundColor || '#111827',

        color: 'white',
        minHeight: '100vh',
        padding: '120px 60px 60px'
      }}
    >

      <Navbar settings={homepage} />

      <h1>
        Publications
      </h1>

      <div
        style={{
          display: 'grid',
          gap: '30px',
          marginTop: '40px'
        }}
      >

        {publications.map((publication: any) => (

          <div
            key={publication._id}
            style={{
              background: '#1f2937',
              padding: '30px',
              borderRadius: '20px'
            }}
          >

            <h2>{publication.title}</h2>

            <p>{publication.journal}</p>

            <p>{publication.year}</p>

            <a
              href={publication.link}
              target="_blank"
              style={{
                color: '#60a5fa'
              }}
            >
              View Publication
            </a>

          </div>

        ))}

      </div>

    </main>

  )
}