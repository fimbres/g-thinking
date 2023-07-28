import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Landing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <Link href='/sign-in'><Button variant='link'>Sign In</Button></Link>
        <Link href='/sign-up'><Button variant='link'>Sign Up</Button></Link>
      </header>
      <div className='text-6xl font-bold'>Hello</div>
      <Button variant="secondary">Hey</Button>
    </main>
  )
}
