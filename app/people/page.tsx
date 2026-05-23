import Navbar from '../components/Navbar'

async function getHomepage() {

  const res = await fetch(
    '/api/homepage',
    { cache: 'no-store' }
  )

  return res.json()
}

async function getPeople() {

  const res = await fetch(
    '/api/people',
    { cache: 'no-store' }
  )

  return res.json()
}

export default async function PeoplePage() {

  const homepage = await getHomepage()

  const people = await getPeople()

  // SEPARATE PI

  const pi = people?.find((person: any) => person.isPI)

  // OTHER MEMBERS

  const members = people?.filter((person: any) => !person.isPI)

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

      {/* PI SECTION */}

      {pi && (

        <section
          style={{
            marginBottom: '80px'
          }}
        >

          <h1
            style={{
              fontSize: '50px',
              marginBottom: '40px'
            }}
          >
            Principal Investigator
          </h1>

          <a
            href={`/people/${pi._id}`}
            style={{
              textDecoration: 'none',
              color: 'white'
            }}
          >

            <div
              style={{
                display: 'flex',
                gap: '40px',
                background: '#1f2937',
                padding: '30px',
                borderRadius: '20px',
                alignItems: 'center'
              }}
            >

              {pi.image && (

                <img
                  src={pi.image}
                  style={{
                    width: '320px',
                    height: '380px',
                    objectFit: 'cover',
                    borderRadius: '20px'
                  }}
                />

              )}

              <div>

                <h2
                  style={{
                    fontSize: '40px'
                  }}
                >
                  {pi.name}
                </h2>

                <h3
                  style={{
                    fontSize: '24px',
                    color: '#cbd5e1',
                    marginBottom: '20px'
                  }}
                >
                  {pi.role}
                </h3>

              </div>

            </div>

          </a>

        </section>

      )}

      {/* OTHER MEMBERS */}

      <section>

        <h1
          style={{
            fontSize: '50px',
            marginBottom: '40px'
          }}
        >
          Lab Members
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
            gap: '30px'
          }}
        >

          {members?.map((person: any) => (

            <a
              key={person._id}
              href={`/people/${person._id}`}
              style={{
                textDecoration: 'none',
                color: 'white'
              }}
            >

              <div
                style={{
                  background: '#1f2937',
                  padding: '20px',
                  borderRadius: '20px'
                }}
              >

                {person.image && (

                  <img
                    src={person.image}
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '20px'
                    }}
                  />

                )}

                <h2>{person.name}</h2>

                <p>{person.role}</p>

              </div>

            </a>

          ))}

        </div>

      </section>

    </main>

  )
}