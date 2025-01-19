import Image from "next/image"

const images = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-MSu8s0C59SvP0nqnwB8unlMesWupU5.png", alt: "'Admin Dashboard showing laboratory statistics and metrics'" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-kqKlGfDsTPosaiqI4BB3E3UMbC7dGy.png", alt: "'Test Reports Management Interface'" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-iquYfXC6WjEZnAyhRyeESEaIOT0mVN.png", alt: "'Lipid Report Submission Form'" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-RX8UL8Slr8s27WVo46MZ96x90D10n6.png", alt: "'Hemoglobin Levels Analysis Graph'" },
]

export default function ImageGallery() {
  return (
    <section id="gallery" className="py-12 md:py-20 bg-neutral-100 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative h-48 sm:h-60 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

