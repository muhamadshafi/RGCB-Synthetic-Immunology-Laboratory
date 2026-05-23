import Navbar from '../components/Navbar'

async function getHomepage() {

  const res = await fetch(
  `${process.env.NEXT_PUBLIC_SITE_URL}/api/homepage`,
  { cache: 'no-store'} 
  )

  return res.json()
}

async function getPositions() {

  const res = await fetch(
  `${process.env.NEXT_PUBLIC_SITE_URL}/api/positions`,
  { cache: 'no-store'} 
  )

  return res.json()
}

export default async function PositionsPage() {

  const homepage = await getHomepage()

  const positions = await getPositions()

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

      <h1
        style={{
          fontSize: '50px',
          marginBottom: '40px'
        }}
      >
        Open Positions
      </h1>

      <div
        style={{
          display: 'grid',
          gap: '30px'
        }}
      >

        {positions.map((position: any) => (

          <a
            key={position._id}
            href={`/positions/${position._id}`}
            style={{
              textDecoration: 'none',
              color: 'white'
            }}
          >

            <div
              style={{
                background: '#1f2937',
                padding: '30px',
                borderRadius: '20px'
              }}
            >

              <h2>
                {position.title}
              </h2>

              <p
                style={{
                  marginTop: '10px',
                  color: '#cbd5e1'
                }}
              >
                Deadline: {position.deadline}
              </p>

            </div>

          </a>

        ))}

      </div>

    </main>

  )
}