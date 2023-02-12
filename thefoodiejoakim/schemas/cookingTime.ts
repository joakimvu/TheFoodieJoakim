import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cookingTime',
  title: 'Coooking Time',
  type: 'document',
  fields: [
    defineField({
      name: 'cookingTime',
      title: 'Cooking Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
