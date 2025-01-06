import React from 'react'
import Layout from '../components/layout'
import JacketCollection from '../components/jacket-collection'

const womenJackets = [
  { id: 1, name: "Women's Leather Jacket", price: 189.99, image: '/placeholder.svg' },
  { id: 2, name: "Women's Denim Jacket", price: 79.99, image: '/placeholder.svg' },
  { id: 3, name: "Women's Bomber Jacket", price: 119.99, image: '/placeholder.svg' },
  { id: 4, name: "Women's Puffer Jacket", price: 139.99, image: '/placeholder.svg' },
  { id: 5, name: "Women's Windbreaker", price: 69.99, image: '/placeholder.svg' },
  { id: 6, name: "Women's Parka", price: 189.99, image: '/placeholder.svg' },
  { id: 7, name: "Women's Fleece Jacket", price: 59.99, image: '/placeholder.svg' },
  { id: 8, name: "Women's Rain Jacket", price: 84.99, image: '/placeholder.svg' },
  { id: 9, name: "Women's Ski Jacket", price: 239.99, image: '/placeholder.svg' },
  { id: 10, name: "Women's Trench Coat", price: 169.99, image: '/placeholder.svg' },
]

export default function WomenPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Women's Jackets</h1>
      <JacketCollection jackets={womenJackets} />
    </Layout>
  )
}

