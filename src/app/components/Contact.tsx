import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl mb-8 md:mb-12 text-[#0F172A] text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl md:text-2xl mb-6 text-[#0F172A]">Contact Information</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Feel free to reach out for collaborations, internship opportunities, 
              or just to connect!
            </p>
            
            <div className="space-y-6">
              <a
                href="mailto:kartikeya.kumbhar@gmail.com"
                className="flex items-center gap-4 text-gray-700 hover:text-cyan-600 transition-colors"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-sm md:text-base">kartikeya.kumbhar@gmail.com</p>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/kartikeya-kumbhar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-cyan-600 transition-colors"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="text-sm md:text-base">www.linkedin.com/in/kartikeya-kumbhar</p>
                </div>
              </a>
              
              <a
                href="https://github.com/Kartik-Senpai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-cyan-600 transition-colors"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Github className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="text-sm md:text-base">github.com/Kartik-Senpai</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-sm md:text-base">India</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl md:text-2xl mb-6 text-[#0F172A]">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  className="w-full min-h-32"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}