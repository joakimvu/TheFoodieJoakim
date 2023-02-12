import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cookingMethod',
  title: 'Coooking Method',
  type: 'document',
  fields: [
    defineField({
      name: 'cookingMethod',
      title: 'Cooking Method',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
