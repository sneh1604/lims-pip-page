import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-neutral-900 text-neutral-50 sticky top-0 z-50 dark:bg-neutral-50 dark:text-neutral-900">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">MyLabVerse</Link>
        
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="#features" className="text-lg">Features</Link>
              <Link href="#product-info" className="text-lg">Product Info</Link>
              <Link href="#gallery" className="text-lg">Gallery</Link>
              <Link href="#contact" className="text-lg">Contact</Link>
              <Button variant="secondary" className="w-full">Get Started</Button>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8">
          <li><Link href="#features">Features</Link></li>
          <li><Link href="#product-info">Product Info</Link></li>
          <li><Link href="#gallery">Gallery</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <Button variant="secondary" className="hidden lg:inline-flex">Get Started</Button>
      </nav>
    </header>
  )
}

