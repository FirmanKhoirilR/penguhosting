export default {
  name: 'pin',
  title: 'Pin',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'about',
      type: 'string',
      title: 'About',
    },
    {
      title: 'CreatedAt',
      name: 'createdAt',
      type: 'date',
      readonly: true,
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'userId',
      type: 'string',
      title: 'userId',
    },
    {
      name: 'postedBy',
      type: 'postedBy',
      title: 'PostedBy',
    },
    {
      name: 'save',
      type: 'array',
      title: 'Save',
      of: [{type: 'save'}],
    },
    {
      name: 'comments',
      type: 'array',
      title: 'Comments',
      of: [{type: 'comment'}],
    },
  ],
}
