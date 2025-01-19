import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      className="py-12 md:py-20 text-neutral-50 relative min-h-[60vh] flex items-center dark:text-neutral-900"
      style={{
        backgroundImage: "url(https://cores.emory.edu/dar/_includes/images/sections/services/diagnostic_lab.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
      ></div>
      <div className="container mx-auto text-center relative z-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Revolutionize Your Lab Management</h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8">Streamline operations, enhance productivity, and ensure compliance with MyLabVerse</p>
        <a href="#contact">
          <Button size="lg" className="w-full sm:w-auto">Schedule a Demo</Button>
        </a>
      </div>
    </section>
  )
}