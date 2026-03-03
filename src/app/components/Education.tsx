import { GraduationCap, Award, Calendar } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl mb-8 md:mb-12 text-[#0F172A] text-center">Education</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {/* College Education */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl mb-2 text-[#0F172A]">
                  Bachelor of Computer Engineering
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  College of Engineering
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-5 h-5 text-cyan-600" />
                    <span className="text-sm md:text-base">Second Year</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Award className="w-5 h-5 text-cyan-600" />
                    <span className="text-sm md:text-base">SGPA: 9.1</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <GraduationCap className="w-5 h-5 text-cyan-600" />
                    <span className="text-sm md:text-base">2024 - 2028</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 12th Standard */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl mb-2 text-[#0F172A]">
                  12th Standard (HSC)
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  Vishwakarma College of Arts Commerce and Science
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Award className="w-5 h-5 text-cyan-600" />
                    <span className="text-sm md:text-base">Percentage: 71%</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-5 h-5 text-cyan-600" />
                    <span className="text-sm md:text-base">Year: 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 10th Standard */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl mb-2 text-[#0F172A]">
                  10th Standard (SSC)
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">
                  Crescent High School
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Award className="w-5 h-5 text-cyan-600" />
                    <span className="text-sm md:text-base">Percentage: 89%</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-5 h-5 text-cyan-600" />
                    <span className="text-sm md:text-base">Year: 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}