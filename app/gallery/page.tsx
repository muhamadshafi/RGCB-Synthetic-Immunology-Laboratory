import Navbar from '../components/Navbar'

async function getHomepage() {

  const res = await fetch(
    'http://localhost:3000/api/homepage',
    { cache: 'no-store' }
  )

  return res.json()
}

async function getGallery() {

  const res = await fetch(
    'http://localhost:3000/api/gallery',
    { cache: 'no-store' }
  )

  return res.json()
}

export default async function GalleryPage() {

  const homepage = await getHomepage()

  const albums = await getGallery()

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
        Gallery
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: '30px',
          marginTop: '40px'
        }}
      >

        {albums?.map((album: any) => (

          <a
            key={album._id}
            href={`/gallery/${album._id}`}
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

              {/* VIDEO */}

              {album.video ? (

                <video
                  controls
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover'
                  }}
                >

                  <source
                    src={album.video}
                    type="video/mp4"
                  />

                </video>

              ) : album.cover && (

                <img
                  src={album.cover}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover'
                  }}
                />

              )}

              <div style={{ padding: '20px' }}>

                <h2>
                  {album.title}
                </h2>

              </div>

            </div>

          </a>

        ))}

      </div>

    </main>

  )
}