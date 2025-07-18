import { ExternalLink, Eye } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';
import project7 from '@/assets/project-7.jpg';
import project8 from '@/assets/project-8.jpg';
import project9 from '@/assets/project-9.jpg';
import project10 from '@/assets/project-10.jpg';
import project11 from '@/assets/project-11.jpg';
import project12 from '@/assets/project-12.jpg';
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "AI Analytics Dashboard",
      description: "Business analytics platform with artificial intelligence for real-time data visualization.",
      image: project1,
      category: "Analytics",
      technologies: ["React", "AI", "Charts"]
    },
    {
      id: 2,
      title: "Customer Service Chatbot",
      description: "Intelligent chatbot system to automate customer service with natural responses.",
      image: project2,
      category: "Chatbot",
      technologies: ["NLP", "React", "API"]
    },
    {
      id: 3,
      title: "AI-powered E-commerce",
      description: "E-commerce platform with personalized recommendations powered by artificial intelligence.",
      image: project3,
      category: "E-commerce",
      technologies: ["React", "AI", "Stripe"]
    },
    {
      id: 4,
      title: "Automated CRM",
      description: "Automated customer relationship management system with smart tracking.",
      image: project4,
      category: "CRM",
      technologies: ["Automation", "React", "API"]
    },
    {
      id: 5,
      title: "Marketing Automation",
      description: "Email marketing automation platform with smart segmentation powered by AI.",
      image: project5,
      category: "Marketing",
      technologies: ["AI", "Email", "Analytics"]
    },
    {
      id: 6,
      title: "Smart Inventory Management",
      description: "Inventory management system with demand predictions based on AI.",
      image: project6,
      category: "Logistics",
      technologies: ["AI", "Predicción", "Dashboard"]
    },
    {
      id: 7,
      title: "Document Processing",
      description: "Automatic document processing platform with OCR and data extraction powered by AI.",
      image: project7,
      category: "OCR",
      technologies: ["OCR", "AI", "Automation"]
    },
    {
      id: 8,
      title: "AI Financial Assistant",
      description: "Smart financial dashboard with investment recommendations and budget tracking.",
      image: project8,
      category: "Fintech",
      technologies: ["AI", "Finance", "Analytics"]
    },
    {
      id: 9,
      title: "Social Media Management",
      description: "Content management and scheduling platform for social media with engagement analytics.",
      image: project9,
      category: "Social Media",
      technologies: ["Social API", "Analytics", "AI"]
    },
    {
      id: 10,
      title: "Smart Appointment System",
      description: "Automated booking platform with AI for schedule optimization and patient management.",
      image: project10,
      category: "Healthcare",
      technologies: ["AI", "Calendar", "Automation"]
    },
     {
      id: 11,
      title: "AI Legal Assistant",
      description: "Legal document analyzer and case suggestion system using natural language processing.",
      image: project11,
      category: "LegalTech",
      technologies: ["NLP", "AI", "Document Analysis"]
    },
    {
    id: 12,
    title: "AI Talent Recruiter",
    description: "Platform for automated candidate screening and matching using AI and behavioral analysis.",
    image: project12,
    category: "HR Tech",
    technologies: ["AI", "Recruitment", "Behavioral Analysis"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-600 to-orange-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover some of our most successful projects where we have transformed businesses through digitalization and smart automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Eye className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to digitize your business?
          </p>
          <a href="#contact">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Request Free Consultation
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;