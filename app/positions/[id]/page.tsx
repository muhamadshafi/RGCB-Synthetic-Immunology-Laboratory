import Navbar from '../../components/Navbar'

async function getHomepage() {

  const res = await fetch(
    '/api/people',
    { cache: 'no-store' }
  )

  return res.json()
}

async function getPosition(id: string) {

  const res = await fetch(
    '/api/positions/${id}',
    { cache: 'no-store' }
  )

  return res.json()
}

export default async function PositionPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const homepage = await getHomepage()

  const { id } = await params

  const position = await getPosition(id)

  return (

    <main
      style={{
        background:
          homepage?.siteBackgroundColor || '#111827',

        color: 'white',
        minHeight: '100vh',
        padding: '120px 60px'
      }}
    >

      <Navbar settings={homepage} />

      <h1
        style={{
          fontSize: '60px',
          marginBottom: '20px'
        }}
      >
        {position.title}
      </h1>

      <p
        style={{
          color: '#cbd5e1',
          marginBottom: '30px'
        }}
      >
        Deadline: {position.deadline}
      </p>

      <p
        style={{
          fontSize: '22px',
          lineHeight: '1.9',
          maxWidth: '1000px'
        }}
      >
        {position.description}
      </p>

      {position.applyLink && (

        <a
          href={position.applyLink}
          target="_blank"
          style={{
            display: 'inline-block',
            marginTop: '40px',
            padding: '15px 30px',
            background: '#2563eb',
            borderRadius: '12px',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Apply Now
        </a>

      )}

    </main>

  )
}