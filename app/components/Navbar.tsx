type NavbarProps = {
  settings?: any
}

export default function Navbar({ settings }: NavbarProps) {

  return (

    <nav
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    boxSizing: 'border-box',

    backgroundColor:
      settings?.navbarBackgroundColor || 'rgba(0,0,0,0.85)',

    backgroundImage:
      settings?.navbarBackgroundImage
        ? `url(${settings.navbarBackgroundImage})`
        : 'none',

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    padding: '15px 30px',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    zIndex: 1000
  }}
>
  

      {/* TITLE */}

      <div
        style={{
          color: settings?.navbarTextColor || 'white',
          fontSize: '22px',
          fontWeight: 'bold'
        }}
      >
        Synthetic Immunology Lab
      </div>

      {/* NAVIGATION */}

      <div
        style={{
          display: 'flex',
          gap: '25px'
        }}
      >

        <a href="/" style={linkStyle(settings)}>Home</a>

        <a href="/people" style={linkStyle(settings)}>People</a>

        <a href="/research" style={linkStyle(settings)}>Research</a>

        <a href="/publications" style={linkStyle(settings)}>Publications</a>

        <a href="/gallery" style={linkStyle(settings)}>Gallery</a>

        <a href="/positions" style={linkStyle(settings)}>Positions</a>

        <a href="/contact" style={linkStyle(settings)}>Contact</a>

      </div>

    </nav>

  )
}

function linkStyle(settings: any) {

  return {
    color: settings?.navbarTextColor || 'white',
    textDecoration: 'none'
  }

}