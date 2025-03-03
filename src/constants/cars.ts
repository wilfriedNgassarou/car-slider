export type Car = Readonly<typeof cars[number]>

export const cars = [
  {
    id: 'card-1',
    image: '/cars/white.png',
    name: {
      line1: 'bmw m2',
      line2: '2016'
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, dignissimos.'
  },
  {
    id: 'card-2',
    image: '/cars/blue.png',
    name: {
      line1: 'bmw',
      line2: 'm2'
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, dignissimos.'
  },
  {
    id: 'card-3',
    image: '/cars/black.png',
    name: {
      line1: 'audi',
      line2: 'v13'
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, dignissimos.'
  },
]