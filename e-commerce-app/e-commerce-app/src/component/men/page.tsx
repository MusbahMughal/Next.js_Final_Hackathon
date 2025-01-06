import React from 'react'
import Layout from '../components/layout'
import JacketCollection from '../components/jacket-collection'

const menJackets = [
  { id: 1, name: "Men's Leather Jacket", price: 199.99, image: '/placeholder.svg' },
  { id: 2, name: "Men's Denim Jacket", price: 89.99, image: '/placeholder.svg' },
  { id: 3, name: "Men's Bomber Jacket", price: 129.99, image: '/placeholder.svg' },
  { id: 4, name: "Men's Puffer Jacket", price: 149.99, image: '/placeholder.svg' },
  { id: 5, name: "Men's Windbreaker", price: 79.99, image: '/placeholder.svg' },
  { id: 6, name: "Men's Parka", price: 199.99, image: '/placeholder.svg' },
  { id: 7, name: "Men's Fleece Jacket", price: 69.99, image: '/placeholder.svg' },
  { id: 8, name: "Men's Rain Jacket", price: 89.99, image: '/placeholder.svg' },
  { id: 9, name: "Men's Ski Jacket", price: 249.99, image: '/placeholder.svg' },
  { id: 10, name: "Men's Trench Coat", price: 179.99, image: '/placeholder.svg' },
]

export default function MenPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Men's Jackets</h1>
      <JacketCollection jackets={menJackets} />
    </Layout>
  )
}

