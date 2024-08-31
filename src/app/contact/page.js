'use client'; 
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'; // ShadCN Button component

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

      {/* Contact Information */}
      <div className="space-y-4 mb-8 text-base sm:text-lg">
        <div>
          <p className="font-medium">Customer Support:</p>
          <p>support@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div>
          <p className="font-medium">Address:</p>
          <p>1234 Market Street</p>
          <p>City, State, ZIP Code</p>
          <p>Country</p>
        </div>
        <div>
          <p className="font-medium">Business Hours:</p>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full"
            required
          />
        </div>
        <div className="text-center">
          <Button type="submit">Send Message</Button>
        </div>
      </form>
    </div>
  );
}
