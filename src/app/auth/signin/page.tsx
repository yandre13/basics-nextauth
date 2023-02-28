'use client'

import { useRef } from 'react'
import { signIn } from 'next-auth/react'

export default function SignInPage() {
  const inputRef = useRef('')
  const passwordRef = useRef('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(inputRef.current, passwordRef.current)
    const result = await signIn('credentials', {
      username: inputRef.current,
      password: passwordRef.current,
      redirect: true,
      callbackUrl: '/',
    })
    console.log({ result })
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="user name"
          onChange={(e) => {
            inputRef.current = e.target.value
          }}
        />

        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            passwordRef.current = e.target.value
          }}
        />

        <button type="submit">Sign in</button>
      </form>
    </section>
  )
}
