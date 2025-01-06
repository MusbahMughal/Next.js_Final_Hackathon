import React from 'react'
import Image from 'next/image'

interface Jacket {
  id: number
  name: string
  price: number
  image: string
}

interface JacketCollectionProps {
  jackets: Jacket[]
}

export default function JacketCollection({ jackets }: JacketCollectionProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {jackets.map((jacket) => (
        <div key={jacket.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image src={jacket.image} alt={jacket.name} width={300} height={400} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{jacket.name}</h3>
            <p className="text-gray-600">${jacket.price.toFixed(2)}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

