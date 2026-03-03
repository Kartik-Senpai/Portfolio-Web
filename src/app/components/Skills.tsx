import { Code2, Wrench, BookOpen, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['Java', 'C', 'C++', 'Python'],
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript'],
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'VS Code', 'Eclipse', 'Canva', 'Roboflow'],
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    title: 'Core Subjects',
    icon: BookOpen,
    skills: ['Data Structures', 'DBMS', 'Operating Systems', 'Mathematics'],
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl mb-8 md:mb-12 text-[#0F172A] text-center">Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-lg ${category.bgColor} mb-4`}>
                  <Icon className={`w-6 h-6 ${category.iconColor}`} />
                </div>
                <h3 className="text-xl mb-4 text-[#0F172A]">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}