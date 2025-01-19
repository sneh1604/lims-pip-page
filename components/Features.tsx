import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Beaker, ClipboardList, BarChart3, Shield } from "lucide-react"

const features = [
  {
    icon: <Beaker className="h-8 w-8 mb-4" />,
    title: "Report Management",
    description: "Generate and manage lab reports with graphical data analysis, including trends like hemoglobin levels"
  },
  {
    icon: <ClipboardList className="h-8 w-8 mb-4" />,
    title: "Patient Tracking",
    description: "Keep track of patient history, referrals, and report progress with ease."
  },
  {
    icon: <BarChart3 className="h-8 w-8 mb-4" />,
    title: "Report Management",
    description: "Generate and manage lab reports with graphical data analysis"
  },
  {
    icon: <Shield className="h-8 w-8 mb-4" />,
    title: "Data Security",
    description: "Secure sensitive information with 256-bit encryption and role-based access controls"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-12 md:py-20 bg-neutral-100 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center">{feature.icon}</div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
                <CardDescription className="mt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

