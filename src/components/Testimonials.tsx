import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Ornava transformed our vision into a reality that exceeded our wildest expectations. Their attention to detail and commitment to sophisticated aesthetics created a home that is both beautiful and incredibly functional.",
    author: "Sarah Jenkins",
    role: "Homeowner, The Brick House"
  },
  {
    id: 2,
    text: "Working with the Ornava team was seamless. They understood our corporate identity and translated it into a workspace that fosters collaboration and innovation. Truly exceptional architecture.",
    author: "Michael Chen",
    role: "CEO, Nexus Tech"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-brown-50 dark:bg-brown-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-brown-950 dark:text-white mb-4">Client Stories</h2>
          <div className="h-1 w-20 bg-brown-900 dark:bg-brown-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white dark:bg-stone-900 p-10 shadow-sm border border-brown-100 dark:border-stone-800 relative transition-colors duration-300">
              <Quote className="absolute top-8 left-8 text-brown-200 dark:text-stone-700 w-12 h-12 -z-0" />
              <p className="text-brown-700 dark:text-stone-300 italic mb-8 relative z-10 leading-relaxed">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-bold text-brown-950 dark:text-white">{item.author}</h4>
                <p className="text-sm text-brown-500 dark:text-brown-400 uppercase tracking-wider">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
