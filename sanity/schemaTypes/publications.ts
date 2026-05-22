export default {
  name: 'publications',
  title: 'Publications',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'journal',
      title: 'Journal',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'number',
    },
    {
      name: 'link',
      title: 'Publication Link',
      type: 'url',
    },
  ],
}