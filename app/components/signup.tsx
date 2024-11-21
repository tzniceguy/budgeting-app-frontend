import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'


export default function Signup() {
  return (
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
  )
}
