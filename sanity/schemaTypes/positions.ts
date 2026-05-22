export default {
  name: 'positions',
  title: 'Positions',
  type: 'document',

  fields: [

    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
    },

    {
      name: 'deadline',
      title: 'Deadline',
      type: 'date',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },

    {
      name: 'applyLink',
      title: 'Apply Link',
      type: 'url',
    },

  ],
}