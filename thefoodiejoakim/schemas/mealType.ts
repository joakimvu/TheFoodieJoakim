import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mealType',
  title: 'Meal Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
