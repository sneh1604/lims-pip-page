import { CheckCircle2 } from "lucide-react"

export default function ProductInfo() {
  return (
    <section id="product-info" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Product Information</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold">MyLabVerse: Your Complete Lab Solution</h3>
            <p className="text-base md:text-lg">MyLabVerse is a comprehensive Laboratory Information Management System (LIMS) designed to streamline lab operations, enhance productivity, and deliver meaningful insights. With intuitive features and a user-friendly interface, it simplifies complex workflows and ensures data security.</p>
            <ul className="space-y-3">
              {["'Cloud-based solution'", "'User-friendly interface'", "'Customizable workflows'", "'Real-time collaboration'", "'Secure data storage'"].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-neutral-900 shrink-0 dark:text-neutral-50" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-neutral-100 p-6 md:p-8 rounded-lg dark:bg-neutral-800">
            <h4 className="text-lg md:text-xl font-semibold mb-4">Technical Specifications</h4>
            <ul className="space-y-3">
              <li className="flex flex-col sm:flex-row sm:gap-2"><strong>Deployment:</strong> Cloud-based or On-premises</li>
              <li className="flex flex-col sm:flex-row sm:gap-2"><strong>Supported Platforms:</strong> Windows, macOS, Linux</li>
              <li className="flex flex-col sm:flex-row sm:gap-2"><strong>Mobile App:</strong> iOS and Android</li>
              <li className="flex flex-col sm:flex-row sm:gap-2"><strong>Data Export:</strong> CSV, Excel, PDF</li>
              <li className="flex flex-col sm:flex-row sm:gap-2"><strong>API:</strong> RESTful API for integrations</li>
              <li className="flex flex-col sm:flex-row sm:gap-2"><strong>Security:</strong> 256-bit encryption, role-based access control</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

