'use client'
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Contact Us</h1>

      {/* Contact Information */}
      <div className="space-y-4 mb-8">
        <div className="text-lg">
          <p className="font-medium">Customer Support:</p>
          <p>support@example.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div className="text-lg">
          <p className="font-medium">Address:</p>
          <p>1234 Market Street</p>
          <p>City, State, ZIP Code</p>
          <p>Country</p>
        </div>
        <div className="text-lg">
          <p className="font-medium">Business Hours:</p>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          {/* Submit Button */}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}
