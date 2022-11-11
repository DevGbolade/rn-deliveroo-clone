export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
    },
    {
      name: 'long',
      title: 'Longitude of the restaurant',
      type: 'number',
    },
    {
      name: 'lat',
      title: 'Latitude of the restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurant address ',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'rating',
      title: 'Enter the rating from (1-5)',
      type: 'number',
      validation: (Rule) => Rule.required().max(5).min(1).error("Please enter a value between 1 & 5")
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
      validation: (Rule) => Rule.required()
    },
  ],
}
