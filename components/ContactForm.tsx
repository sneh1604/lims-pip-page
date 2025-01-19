"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from 'emailjs-com'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  
    // Send email with EmailJS
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          setFormData({ name: '', email: '', message: '' }) // Reset form after submission
        },
        (err) => {
          console.log('FAILED...', err)
          alert('Failed to send email. Please try again later.')
        }
      )
  }
  

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Contact Us</h2>
        <div className="max-w-md mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg dark:bg-neutral-950">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-[120px]"
              />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

