import React from 'react'
import Layout from './components/layout'
import JacketCollection from './components/jacket-collection'

const jackets = [
  { id: 1, name: 'Classic Leather Jacket', price: 199.99, image: '/placeholder.svg' },
  { id: 2, name: 'Denim Jacket', price: 89.99, image: '/placeholder.svg' },
  { id: 3, name: 'Bomber Jacket', price: 129.99, image: '/placeholder.svg' },
  { id: 4, name: 'Puffer Jacket', price: 149.99, image: '/placeholder.svg' },
  { id: 5, name: 'Windbreaker', price: 79.99, image: '/placeholder.svg' },
  { id: 6, name: 'Parka', price: 199.99, image: '/placeholder.svg' },
  { id: 7, name: 'Fleece Jacket', price: 69.99, image: '/placeholder.svg' },
  { id: 8, name: 'Rain Jacket', price: 89.99, image: '/placeholder.svg' },
  { id: 9, name: 'Ski Jacket', price: 249.99, image: '/placeholder.svg' },
  { id: 10, name: 'Trench Coat', price: 179.99, image: '/placeholder.svg' },
]

export default function Home() {
  return (
    <Layout>
      <section className="bg-gray-200 py-20 mb-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to JacketStore</h1>
          <p className="text-xl mb-8">Discover our latest collection of stylish jackets</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors">
            Shop Now
          </button>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-8">Featured Jackets</h2>
        <JacketCollection jackets={jackets} />
      </section>
    </Layout>
  )
}

