export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',

  fields: [

    {
      name: 'title',
      title: 'Album Title',
      type: 'string',
    },

    {
      name: 'cover',
      title: 'Album Cover Image',
      type: 'image',
    },

    {
      name: 'images',
      title: 'Album Images',
      type: 'array',

      of: [
        {
          type: 'image'
        }
      ]
    },

    {
      name: 'video',
      title: 'Album Video',
      type: 'file',

      options: {
        accept: 'video/*',
      },
    },

  ],
}