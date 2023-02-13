import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'unit',
  title: 'Unit',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
