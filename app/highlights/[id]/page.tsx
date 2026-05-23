import Navbar from '../../components/Navbar'

async function getHomepage() {

  const res = await fetch(
    '${process.env.NEXT_PUBLIC_SITE_URL}/api/homepage',
    { cache: 'no-store' }
  )

  return res.json()
}

async function getHighlight(id: string) {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/highlights/${id}`,
    {
      cache: 'no-store'
    }
  )

  return res.json()
}

export default async function HighlightPage(
  {
    params,
  }: {
    params: Promise<{ id: string }>
  }
) {

  const homepage = await getHomepage()

  const { id } = await params

  const item = await getHighlight(id)

  return (

    <main
      style={{
        background: '#111827',
        color: 'white',
        minHeight: '100vh',
        padding: '120px 60px 60px'
      }}
    >

      <Navbar settings={homepage} />

      {item.image && (

        <img
          src={item.image}
          style={{
            width: '100%',
            maxHeight: '500px',
            objectFit: 'cover',
            borderRadius: '20px'
          }}
        />

      )}

      <h1
        style={{
          marginTop: '30px',
          fontSize: '50px'
        }}
      >
        {item.title}
      </h1>

      <p
        style={{
          marginTop: '20px',
          fontSize: '22px',
          lineHeight: '1.8'
        }}
      >
        {item.content}
      </p>

    </main>

  )
}