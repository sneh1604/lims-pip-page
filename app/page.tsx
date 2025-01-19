import Header from "./../components/Header"
import Hero from "./../components/Hero"
import Features from "../components/Features"
import ProductInfo from "../components/ProductInfo"
import ImageGallery from "../components/ImageGallery"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductInfo />
        <ImageGallery />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

