import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='md:grid md:grid-cols-12'>
      <div className='md:col-span-4'>
        <div className='border-b-2 my-4'>
          <div className='my-4'>
          <h2>get started now</h2>
          <h3>enter your credentials to access your account</h3>
          </div>
          <div className='space-x-4 mb-4 container items-center text-center'>
          <Button className='bg-transparent text-black text-sm font-light'><Image src="./google-plus-svgrepo-com.svg" alt='google' width={25} height={25}/>login with google</Button>
            <Button className='bg-transparent text-black text-sm font-light'><Image src="./apple-svgrepo-com.svg" alt='google' width={25} height={25}/>login with apple</Button>
          </div>
        </div>
        <div className='shadow-md p-2 rounded-md'>
          <div>
            <form>
              <div>
                  <Label htmlFor='nam'>Name</Label>
                  <Input type='text' id='name' placeholder='John Doe' />
              </div>
              <div>
                <Label htmlFor='email'>Email</Label>
                <Input type='email' id='email' placeholder='johndoe@example.com' />
              </div>
              <div>
                <Label htmlFor='Password'>Password</Label>
                <Input type='password' id='password' placeholder='Enter your password' />
              </div>
              <div className='flex'>
                <Checkbox/>
                <p className='text-xs md:text-sm'>i agree to the terms and conditions</p>
                <p className='text-xs md:text-md'><Link href='/'>Forgot Password</Link></p>
              </div>
              <div className='flex justify-center items-center mt-4'>
                <Button className='w-2/3'>Create Account</Button>
              </div>
          </form>
          <div className=''>
            <label htmlFor="signup">have an account? <Link href='/'>Login</Link></label>
        </div>
          </div>
        </div>
        </div>
        <div className="hidden md:block md:col-span-8 bg-blue-300 rounded-md md:mr-4 p-6 md:p-12">
        <div>
          <h1 className='text-2xl md:text-4xl font-bold'>Lugumya</h1>
          <h2 className='text-lg md:text-xl font-light'>the simplest way to manage your finances</h2>
        </div>
        <div>
          <Image src={'./undraw-financial-data.svg'} alt='finance' width={500} height={500}/>
        </div>
      </div>
    </div>
  )
}
