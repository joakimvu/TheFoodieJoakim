import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'portion',
      title: 'Portion',
      type: 'number',
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'ingredientName',
              title: 'Ingredient Name',
              type: 'reference',
              to: [{type: 'ingredient'}],
            },
            {
              name: 'unit',
              title: 'Unit',
              type: 'reference',
              to: [{type: 'unit'}],
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
            },
          ],
          preview: {
            select: {
              ingredientName: 'ingredientName.title',
              unit: 'unit.title',
              quantity: 'quantity',
            },
            prepare(selection: any) {
              return {
                title: `${selection.ingredientName} - ${selection.quantity} ${selection.unit}`,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'country',
      title: 'Country of origin',
      type: 'object',
      fields: [
        {
          name: 'Country',
          type: 'reference',
          to: [{type: 'country'}],
        },
      ],
    }),
    // title: "layout",
    // name: "layout",
    // type: "reference",
    // to: [{ type: "tag" }],
    defineField({
      name: 'cookingTime',
      title: 'Cooking Time',
      type: 'object',
      fields: [
        {
          name: 'Time',
          type: 'reference',
          to: [{type: 'cookingTime'}],
        },
      ],
    }),
    defineField({
      name: 'protein',
      title: 'Protein',
      type: 'array',
      of: [{type: 'reference', to: {type: 'protein'}}],
    }),
    defineField({
      name: 'cookingMethod',
      title: 'Cooking Method',
      type: 'array',
      of: [{type: 'reference', to: {type: 'cookingMethod'}}],
    }),
    defineField({
      name: 'mealType',
      title: 'Meal Type',
      type: 'array',
      of: [{type: 'reference', to: {type: 'mealType'}}],
    }),
    defineField({
      name: 'season',
      title: 'Seasons',
      type: 'array',
      of: [{type: 'reference', to: {type: 'season'}}],
    }),
    // defineField({
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // }),
    defineField({
      name: 'cookingSteps',
      title: 'CookingSteps',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
