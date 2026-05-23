import Navbar from '../../components/Navbar'

async function getHomepage() {

  const res = await fetch(
    '/api/homepage',
    { cache: 'no-store' }
  )

  return res.json()
}

async function getPerson(id: string) {

  const res = await fetch(
    '/api/people/${id}',
    { cache: 'no-store' }
  )

  return res.json()
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const homepage = await getHomepage()

  const { id } = await params

  const person = await getPerson(id)

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

      <div
        style={{
          display: 'flex',
          gap: '50px',
          alignItems: 'flex-start'
        }}
      >

        {person.image && (

          <img
            src={person.image}
            style={{
              width: '400px',
              height: '500px',
              objectFit: 'cover',
              borderRadius: '20px'
            }}
          />

        )}

        <div>

          <h1
            style={{
              fontSize: '60px',
              marginBottom: '20px'
            }}
          >
            {person.name}
          </h1>

          <h2
            style={{
              color: '#cbd5e1',
              marginBottom: '30px'
            }}
          >
            {person.role}
          </h2>

          <p
            style={{
              fontSize: '22px',
              lineHeight: '1.9',
              maxWidth: '900px'
            }}
          >
            {person.bio}
          </p>

        </div>

      </div>

    </main>

  )
}