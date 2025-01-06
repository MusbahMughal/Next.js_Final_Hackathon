import React from 'react'
import Layout from '../components/layout'
import JacketCollection from '../components/jacket-collection'

const kidsJackets = [
  { id: 1, name: "Kids' Leather Jacket", price: 89.99, image: '/placeholder.svg' },
  { id: 2, name: "Kids' Denim Jacket", price: 49.99, image: '/placeholder.svg' },
  { id: 3, name: "Kids' Bomber Jacket", price: 69.99, image: '/placeholder.svg' },
  { id: 4, name: "Kids' Puffer Jacket", price: 79.99, image: '/placeholder.svg' },
  { id: 5, name: "Kids' Windbreaker", price: 39.99, image: '/placeholder.svg' },
  { id: 6, name: "Kids' Parka", price: 99.99, image: '/placeholder.svg' },
  { id: 7, name: "Kids' Fleece Jacket", price: 34.99, image: '/placeholder.svg' },
  { id: 8, name: "Kids' Rain Jacket", price: 44.99, image: '/placeholder.svg' },
  { id: 9, name: "Kids' Ski Jacket", price: 119.99, image: '/placeholder.svg' },
  { id: 10, name: "Kids' Trench Coat", price: 89.99, image: '/placeholder.svg' },
]

export default function KidsPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Kids' Jackets</h1>
      <JacketCollection jackets={kidsJackets} />
    </Layout>
  )
}

