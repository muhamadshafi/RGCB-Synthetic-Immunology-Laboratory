import Navbar from '../../components/Navbar'

async function getHomepage() {

  const res = await fetch(
  `${process.env.NEXT_PUBLIC_SITE_URL}/api/homepage`,
  { cache: 'no-store' }
  )

  return res.json()
}

async function getAlbum(id: string) {

  const res = await fetch(
  `${process.env.NEXT_PUBLIC_SITE_URL}/api/allery/${id}`,
  { cache: 'no-store' }
  )

  return res.json()
}

export default async function GalleryAlbumPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const homepage = await getHomepage()

  const { id } = await params

  const album = await getAlbum(id)

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
        {album.title}
      </h1>

      {/* VIDEO */}

      {album.video && (

        <video
          controls
          style={{
            width: '100%',
            borderRadius: '20px',
            marginBottom: '40px'
          }}
        >

          <source
            src={album.video}
            type="video/mp4"
          />

        </video>

      )}

      {/* IMAGES */}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: '30px'
        }}
      >

        {album.images?.map((image: any, index: number) => (

          <img
            key={index}
            src={image.url}
            style={{
              width: '100%',
              borderRadius: '20px'
            }}
          />

        ))}

      </div>

    </main>

  )
}