'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()

  console.log(session)

  return (
    <nav>
      <Link href="/">Home</Link>

      <Link href="/admin">Admin</Link>

      <Link href="/admin/panel">Panel</Link>

      <div>
        {session?.user ? (
          <div>
            <p>{session.user.name}</p>
            <button onClick={() => signOut()}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={() => signIn()}>Login</button>
          </div>
        )}
      </div>
    </nav>
  )
}
