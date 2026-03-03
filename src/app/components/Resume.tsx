import { Download, FileText } from 'lucide-react';
import { Button } from './ui/button';

export function Resume() {
  const handleDownload = () => {
    // Placeholder for resume download
    console.log('Download resume');
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex p-4 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl mb-6">
            <FileText className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-3xl md:text-4xl mb-4 text-[#0F172A]">Resume</h2>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Download my resume to learn more about my experience, skills, and projects
          </p>
          
          <Button
            onClick={handleDownload}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg rounded-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}