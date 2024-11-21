import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {

  const year = new Date().getFullYear()
  return (
    <footer className='rounded-md mt-4 bg-sky-100'>
        <div className='w-full max-w-screen-xl mx-auto p-4 items-center md:flex md:items-center md:justify-between'>
          <div>
            <h3>Download our mobile app</h3>
            <div className='flex items-center space-x-6'>
              <Link href='/' className='hover:underline'>
                <Image src='./google-play-badge-logo-svgrepo-com.svg' alt='google play' width={100} height={50} className='w-auto h-auto'/>
              </Link>
              <Link href='/' className='hover:underline'>
                <Image src='./app-store-apple-logo-svgrepo-com.svg' alt='app store'  width={100} height={30} className='w-auto h-auto'/>
              </Link>
              </div>
          </div>
            <span className='text-sm text-gray-500 text-center'>{year} <Link href="/" className='hover:underline'>Lugumya.</Link> All rights reserved</span>
        </div>
    </footer>
  )
}
