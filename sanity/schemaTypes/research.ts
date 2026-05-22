export default {
  name: 'research',
  title: 'Research',
  type: 'document',

  fields: [

    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },

    {
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'date',
    },

    {
      name: 'link',
      title: 'Research Link',
      type: 'url',
    },

  ],
}