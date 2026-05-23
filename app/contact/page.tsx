import Navbar from '../components/Navbar'

async function getHomepage() {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/homepage`,
    { cache: 'no-store' }
  )

  return res.json()
}

async function getContact() {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/contact`,
    { cache: 'no-store' }
  )

  return res.json()
}

export default async function ContactPage() {

  const homepage = await getHomepage()

  const contact = await getContact()

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
        Contact Us
      </h1>

      <div
        style={{
          marginTop: '40px',
          background: '#1f2937',
          padding: '30px',
          borderRadius: '20px',
          maxWidth: '700px'
        }}
      >

        <h2>Email</h2>
        <p>{contact?.email}</p>

        <h2 style={{ marginTop: '20px' }}>
          Phone
        </h2>
        <p>{contact?.phone}</p>

        <h2 style={{ marginTop: '20px' }}>
          Address
        </h2>
        <p>{contact?.address}</p>

        {contact?.maplink && (

          <a
            href={contact.maplink}
            target="_blank"
            style={{
              color: '#60a5fa'
            }}
          >
            Open in Google Maps
          </a>

        )}

      </div>

    </main>

  )
}