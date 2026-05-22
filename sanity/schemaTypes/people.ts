export default {
  name: 'people',
  title: 'People',
  type: 'document',

  fields: [

    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },

    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },

    {
      name: 'isPI',
      title: 'Principal Investigator',
      type: 'boolean',
    },

    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },

    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },

  ],
}