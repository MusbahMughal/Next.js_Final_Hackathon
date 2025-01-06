import React from 'react'
import Layout from '../components/layout'

export default function ContactPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-lg" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  )
}

