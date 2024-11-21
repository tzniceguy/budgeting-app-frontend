import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function Login() {
  return (
    <div>
        <h1>Login</h1>
        <div>
        <form>
            <div>
            <label htmlFor='email'>Email</label>
            <Input type='email' id='email' placeholder='Enter your email' />
            </div>
            <div>
            <label htmlFor='password'>Password</label>
            <Input type='password' id='password' placeholder='Enter your password' />
            </div>
            <div>
                <Button>Login</Button>
            </div>
        </form>
        </div>
    </div>
  )
}
