export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl mb-8 md:mb-12 text-[#0F172A] text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              I'm a second-year Computer Engineering student with a strong academic record (SGPA: 9.1) 
              and a passion for technology. My interests span across artificial intelligence, software 
              development, and research in emerging technologies.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              I enjoy building practical solutions to real-world problems, from AI-powered applications 
              to web-based tools. I'm constantly learning new technologies and looking for opportunities 
              to apply my skills in meaningful projects.
            </p>
            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-6 rounded-xl border border-cyan-100">
              <p className="text-cyan-900">
                <span className="font-semibold">Current SGPA:</span> 9.1
              </p>
            </div>
          </div>
          
          <div className="relative order-first md:order-last">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1673431738089-c4fc9c2e96a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzayUyMHdvcmtzcGFjZSUyMGNvbXB1dGVyfGVufDF8fHx8MTc3MjU0ODkxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}