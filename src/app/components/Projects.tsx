import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'CityRev – Smart Civic Issue Reporting System',
    description: 'Led the development of a YOLOv8-based pothole detection model using Roboflow, trained on more than 1000 images with approximately 97 percent accuracy. Integrated the model with a Flutter-based civic reporting application through secure HTTPS API requests and collaborated with a team on workflow design and testing.',
    techStack: ['YOLOv8', 'Roboflow', 'Flutter', 'Machine Learning'],
    gradient: 'from-cyan-400 to-blue-500',
    githubLink: 'https://github.com/Kartik-Senpai/CityRev',
  },
  {
    title: 'Market Trend Prediction and Visualization Platform',
    description: 'Developed a FinTech-focused market trend prediction and visualization platform using historical stock data and sentiment analysis. Contributed to backend logic, structured data handling, and interactive visualization while collaborating with team members to design accurate and user-friendly analytical workflows.',
    techStack: ['Python', 'Machine Learning', 'Sentiment Analysis', 'Data Visualization'],
    gradient: 'from-teal-400 to-cyan-500',
    githubLink: 'https://github.com/Kartik-Senpai/Stock-Market-Prediction-Web-App-using-Machine-Learning-And-Sentiment-Analysis',
  },
  {
    title: 'TB Risk Assessment App (Ongoing)',
    description: 'AI-powered health assessment tool designed for a hackathon to predict tuberculosis risk using machine learning models and structured questionnaire-based evaluation.',
    techStack: ['Python', 'Machine Learning', 'Healthcare AI'],
    gradient: 'from-blue-400 to-teal-500',
    githubLink: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl mb-8 md:mb-12 text-[#0F172A] text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <h3 className="text-xl mb-3 text-[#0F172A]">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-lg text-sm border border-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  className="w-full border-cyan-500 text-cyan-600 hover:bg-cyan-50"
                  onClick={() => project.githubLink && window.open(project.githubLink, '_blank')}
                  disabled={!project.githubLink}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {project.githubLink ? 'View Repository' : 'Coming Soon'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}