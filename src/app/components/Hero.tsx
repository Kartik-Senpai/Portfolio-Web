import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0F172A] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1688413709025-5f085266935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MjUzOTIxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]"></div>
      
      {/* Accent shapes */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
          Kartikeya Kumbhar
        </h1>
        
        <h2 className="text-lg md:text-xl lg:text-2xl text-cyan-400 mb-6">
          Computer Engineering Student | Aspiring Software Developer
        </h2>
        
        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Passionate about AI, Full Stack Development, and solving complex problems through innovative technology solutions
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-lg"
          >
            View Projects
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-lg"
          >
            Contact Me
          </Button>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-cyan-400" />
        </div>
      </div>
    </section>
  );
}