import Navbar from './components/Navbar'

async function getHomepage() {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/homepage`,
    { cache: 'no-store' }
  )

  return res.json()
}

async function getHighlights() {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/highlights`,
    { cache: 'no-store' }
  )

  return res.json()
}

export default async function Home() {

  const homepage = await getHomepage()

  const highlights = await getHighlights()

  return (

    <main>

      <Navbar settings={homepage} />

      {/* HERO SECTION */}

      <section
        style={{
          position: 'relative',
          overflow: 'hidden',

          backgroundImage:
            homepage?.heroImage
              ? `url(${homepage.heroImage})`
              : 'none',

          backgroundColor: '#0f172a',

          backgroundSize: 'cover',
          backgroundPosition: 'center',

          color: 'white',

          minHeight: '100vh',

          display: 'flex',
          flexDirection: 'column',

          justifyContent: 'center',
          alignItems: 'center',

          textAlign: 'center',

          padding: '40px'
        }}
      >

        {/* DARK OVERLAY */}

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            zIndex: 1
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,

            background: 'rgba(0,0,0,0.5)',
            padding: '40px',
            borderRadius: '20px'
          }}
        >

          <h1 style={{ fontSize: '70px' }}>
            {homepage?.title || 'SYNTHETIC IMMUNOLOGY LAB'}
          </h1>

          <p style={{ fontSize: '28px' }}>
            {homepage?.subtitle || 'CAR-T Cell Therapy | Synthetic Immunology | Hematotoxicity Research'}
          </p>

        </div>

      </section>

      {/* ABOUT SECTION */}

      <section
        style={{
          background:
            homepage?.siteBackgroundColor || '#0f172a',

          color: 'white',
          padding: '80px 40px',
          textAlign: 'center'
        }}
      >

        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >

          <h1
            style={{
              fontSize: '50px',
              marginBottom: '30px'
            }}
          >
            {homepage?.aboutTitle || 'About the Lab'}
          </h1>

          <p
            style={{
              fontSize: '24px',
              lineHeight: '1.8'
            }}
          >
            {homepage?.aboutText || 'Our laboratory focuses on synthetic immunology, CAR-T cell engineering, lymphoma immunotherapy, and immune-associated hematotoxicity.'}
          </p>

        </div>

      </section>

      {/* VIDEO SECTION */}

      {homepage?.heroVideo && (

        <section
          style={{
            background:
              homepage?.siteBackgroundColor || '#111827',

            padding: '80px 40px'
          }}
        >

          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >

            <video
              autoPlay
              muted
              loop
              controls
              playsInline
              style={{
                width: '100%',
                borderRadius: '20px'
              }}
            >

              <source
                src={homepage.heroVideo}
                type="video/mp4"
              />

            </video>

          </div>

        </section>

      )}

      {/* HIGHLIGHTS SECTION */}

      <section
        style={{
          background:
            homepage?.siteBackgroundColor || '#111827',

          color: 'white',
          padding: '60px'
        }}
      >

        <h1
          style={{
            fontSize: '50px',
            marginBottom: '40px'
          }}
        >
          Highlights
        </h1>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: '30px'
          }}
        >

          {highlights?.map((item: any) => (

            <a
              key={item._id}
              href={`/highlights/${item._id}`}
              style={{
                textDecoration: 'none',
                color: 'white'
              }}
            >

              <div
                style={{
                  background: '#1f2937',
                  borderRadius: '20px',
                  overflow: 'hidden'
                }}
              >

                {item.image && (

                  <img
                    src={item.image}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover'
                    }}
                  />

                )}

                <div style={{ padding: '20px' }}>

                  <h2>
                    {item.title}
                  </h2>

                </div>

              </div>

            </a>

          ))}

        </div>

      </section>

      {/* FOOTER */}

      <section
        style={{
          background: '#0f172a',
          padding: '60px 40px',
          color: 'white',
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}
      >

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '40px',
            flexWrap: 'wrap'
          }}
        >

          {/* LEFT SIDE */}

          <div
            style={{
              maxWidth: '400px'
            }}
          >

            {homepage?.footerText && (

              <p
                style={{
                  lineHeight: '1.8',
                  color: '#cbd5e1'
                }}
              >
                {homepage.footerText}
              </p>

            )}

          </div>

          {/* CENTER */}

          <div
            style={{
              textAlign: 'center'
            }}
          >

            {/* INSTITUTE LOGO */}

            {homepage?.instituteLogo && (

              <img
                src={homepage.instituteLogo}
                style={{
                  height: '100px',
                  objectFit: 'contain',
                  marginBottom: '20px'
                }}
              />

            )}

            {/* LINKEDIN */}

            {homepage?.linkedinLink && (

              <div>

                <a
                  href={homepage.linkedinLink}
                  target="_blank"
                  style={{
                    color: '#60a5fa',
                    fontSize: '20px',
                    textDecoration: 'none'
                  }}
                >
                  LinkedIn
                </a>

              </div>

            )}

          </div>

          {/* RIGHT SIDE */}

          <div>

            {homepage?.fundingPartners?.length > 0 && (

              <div>

                <h2
                  style={{
                    marginBottom: '20px'
                  }}
                >
                  Funding Partners
                </h2>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px'
                  }}
                >

                  {homepage.fundingPartners.map((partner: any, index: number) => (

                    <img
                      key={index}
                      src={partner.url}
                      style={{
                        height: '60px',
                        objectFit: 'contain'
                      }}
                    />

                  ))}

                </div>

              </div>

            )}

          </div>

        </div>

      </section>

    </main>

  )
}