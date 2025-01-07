import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full border-t">
      <div className="max-w-7xl mx-auto py-3 px-4 flex justify-center gap-6">
        <Link
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          GitHub
        </Link>
        <Link
          href="https://linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          LinkedIn
        </Link>
        <Link
          href="https://YOUR_USERNAME.substack.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          Substack
        </Link>
      </div>
    </footer>
  )
}