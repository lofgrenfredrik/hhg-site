import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 text-white">
      <h1 className="font-heading text-7xl font-bold">Page not found</h1>
      <Link className="text-lg underline" href="/">
        Go back to start page
      </Link>
    </div>
  )
}
