import Button from '@/components/button'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => (
  <div className="flex w-full justify-center">
    <div className="flex flex-col items-center bg-indigo-500 w-80 h-80 mt-48">
      <div className="flex my-2">
        <label htmlFor="username" className="w-24 inline-block">
          Username:
        </label>
        <input id="username" type="text" className="w-48" />
      </div>
      <div className="flex my-2">
        <label htmlFor="password" className="w-24 inline-block">
          Password:
        </label>
        <input id="password" type="password" className="w-48" />
      </div>
      <div className="flex my-2">
        <Button text="Sign In" size="SMALL" />
        <Link href="/">Sign Up</Link>
      </div>
    </div>
  </div>
)

// noinspection JSUnusedGlobalSymbols
export default SignInPage
