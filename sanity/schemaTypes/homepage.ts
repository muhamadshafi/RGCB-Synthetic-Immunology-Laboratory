export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',

  fields: [

    // =========================
    // SITE SETTINGS
    // =========================

    {
      name: 'siteBackgroundColor',
      title: 'Site Background Color',
      type: 'string',
    },

    // =========================
    // HERO SECTION
    // =========================

    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
    },

    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },

    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
    },

    {
      name: 'heroVideo',
      title: 'Hero Video',
      type: 'file',

      options: {
        accept: 'video/*',
      },
    },

    // =========================
    // ABOUT SECTION
    // =========================

    {
      name: 'aboutTitle',
      title: 'About Section Title',
      type: 'string',
    },

    {
      name: 'aboutText',
      title: 'About Section Text',
      type: 'text',
    },

    // =========================
    // NAVBAR SETTINGS
    // =========================

    {
      name: 'navbarBackgroundColor',
      title: 'Navbar Background Color',
      type: 'string',
    },

    {
      name: 'navbarTextColor',
      title: 'Navbar Text Color',
      type: 'string',
    },

    {
      name: 'navbarBackgroundImage',
      title: 'Navbar Background Image',
      type: 'image',
    },

    // =========================
    // FOOTER SETTINGS
    // =========================

    {
      name: 'instituteLogo',
      title: 'Institute Logo',
      type: 'image',
    },

    {
      name: 'linkedinLink',
      title: 'LinkedIn Link',
      type: 'url',
    },
    {
  name: 'footerText',
  title: 'Footer Text / Address',
  type: 'text',
},

    {
      name: 'fundingPartners',
      title: 'Funding Partner Logos',
      type: 'array',

      of: [
        {
          type: 'image'
        }
      ]
    },
    

  ],
}