import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'season',
  title: 'Season',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
