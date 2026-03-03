export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm md:text-base">
            © {new Date().getFullYear()} Kartikeya Kumbhar. All rights reserved.
          </p>
          
          <div className="flex gap-4 md:gap-6">
            <a
              href="#about"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-base"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}