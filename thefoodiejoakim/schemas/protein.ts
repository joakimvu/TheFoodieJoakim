import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'protein',
  title: 'Protein',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
