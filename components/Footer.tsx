import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-50 py-8 dark:bg-neutral-50 dark:text-neutral-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold">MyLabVerse</Link>
            <p className="mt-2">Empowering laboratories worldwide</p>
          </div>
          <nav className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#product-info">Product Info</Link></li>
              <li><Link href="#gallery">Gallery</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MyLabVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

