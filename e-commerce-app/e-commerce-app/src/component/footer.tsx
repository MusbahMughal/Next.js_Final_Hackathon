import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">JacketStore</h3>
          <p>Your one-stop shop for stylish jackets.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/men">Men</Link></li>
            <li><Link href="/women">Women</Link></li>
            <li><Link href="/kids">Kids</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <p>123 Jacket Street, Fashion City</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@jacketstore.com</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2023 JacketStore. All rights reserved.</p>
      </div>
    </footer>
  )
}

