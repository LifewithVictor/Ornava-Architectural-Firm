import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-stone-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold tracking-tight text-brown-950 dark:text-white mb-6">Let's Build Something Extraordinary</h2>
            <div className="h-1 w-20 bg-brown-900 dark:bg-brown-500 mb-8"></div>
            <p className="text-brown-700 dark:text-stone-400 mb-8 leading-relaxed">
              Whether you're looking to build a dream home or a landmark commercial space, we're here to help you realize your vision.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-brown-950 dark:text-white mb-1">Visit Us</h4>
                <p className="text-brown-600 dark:text-stone-400">123 Architecture Avenue<br />Design District, NY 10012</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-brown-950 dark:text-white mb-1">Contact</h4>
                <p className="text-brown-600 dark:text-stone-400">hello@ornava.com<br />+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brown-800 dark:text-stone-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-brown-200 dark:border-stone-700 focus:border-brown-900 dark:focus:border-brown-500 focus:ring-1 focus:ring-brown-900 dark:focus:ring-brown-500 outline-none transition-colors bg-stone-50 dark:bg-stone-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brown-800 dark:text-stone-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-brown-200 dark:border-stone-700 focus:border-brown-900 dark:focus:border-brown-500 focus:ring-1 focus:ring-brown-900 dark:focus:ring-brown-500 outline-none transition-colors bg-stone-50 dark:bg-stone-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brown-800 dark:text-stone-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-brown-200 dark:border-stone-700 focus:border-brown-900 dark:focus:border-brown-500 focus:ring-1 focus:ring-brown-900 dark:focus:ring-brown-500 outline-none transition-colors bg-stone-50 dark:bg-stone-900 dark:text-white"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center px-8 py-4 bg-brown-900 dark:bg-brown-700 text-white font-medium tracking-wide uppercase transition-all duration-300 hover:bg-brown-800 dark:hover:bg-brown-600 disabled:opacity-70 disabled:cursor-not-allowed ${isSubmitted ? 'bg-green-700 hover:bg-green-800' : ''}`}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : isSubmitted ? (
                  'Message Sent'
                ) : (
                  <>
                    Send Message <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
