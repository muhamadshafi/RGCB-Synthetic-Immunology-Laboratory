import Navbar from '../components/Navbar'

async function getHomepage() {

  const res = await fetch(
    '/api/homepage',
    { cache: 'no-store' }
  )

  return res.json()
}

async function getResearch() {

  const res = await fetch(
    '/api/research',
    { cache: 'no-store' }
  )

  return res.json()
}

export default async function ResearchPage() {

  const homepage = await getHomepage()

  const research = await getResearch()

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

      <h1 style={{ fontSize: '50px' }}>
        Research
      </h1>

      <div
        style={{
          display: 'grid',
          gap: '30px',
          marginTop: '40px'
        }}
      >

        {research?.map((item: any, index: number) => (

          <div
            key={item._id}
            style={{
              background: '#1f2937',
              padding: '30px',
              borderRadius: '20px'
            }}
          >

            <h2
  style={{
    fontSize: '32px',
    marginBottom: '15px'
  }}
>
  {index + 1}. {item.title}
</h2>

            <p
              style={{
                fontSize: '20px',
                lineHeight: '1.8'
              }}
            >
              {item.description}
            </p>

            {/* DATE */}

            {item.publicationDate && (

              <p
                style={{
                  marginTop: '20px',
                  color: '#cbd5e1'
                }}
              >
                Published: {item.publicationDate}
              </p>

            )}

            {/* LINK */}

            {item.link && (

              <a
                href={item.link}
                target="_blank"
                style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  color: '#60a5fa',
                  textDecoration: 'none'
                }}
              >
                View Research
              </a>

            )}

          </div>

        ))}

      </div>

    </main>

  )
}