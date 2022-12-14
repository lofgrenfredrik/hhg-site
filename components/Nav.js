import Link from "next/link"

export default function Nav() {
  return (
    <nav className="fixed top-0 z-50 h-12 w-full bg-orange-400">
      <Link href="/services">Services</Link>
      <Link href="/events">Events</Link>
    </nav>
  )
}
