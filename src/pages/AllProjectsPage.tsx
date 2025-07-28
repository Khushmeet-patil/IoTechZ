import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

export default function ProjectsPage() {
  const navigate = useNavigate();

  const projects = [
    {
      id: "ai-companion-robot",
      title: "AI Companion Robot",
      category: "IoT",
      image: "/images/Ai-companion-robot-project.png",
      brief: "A smart robot designed to give emotional support and talk to people. It can see, hear, and respond using a camera, microphone, and speaker.",
    },
    {
      id: "git-lab-connect",
      title: "GitLab Connect Web App",
      category: "Web Development",
      image: "/images/gitlab-connect-project.gif",
      brief: "A web app that connects GitLab projects with GitHub repositories.",
    },
    {
      id: "inventory-management",
      title: "Inventory Management System",
      category: "App Development",
      image: "/images/inventory-management-app-project.gif",
      brief: "A mobile app for inventory management and supply chain optimization.",
    },
    {
      id: "online-learning-platform",
      title: "Online Learning Platform",
      category: "UI/UX Design",
      image: "/images/UX.png",
      brief: "Design A user-friendly platform for online education and learning.",
    },
    {
      id: "code-optimizer",
      title: "CodeTalk - AI Code Assistant",
      category: "Web Development",
      image: "/images/code.png",
      brief: "The Online Code Analysis And Debugging Platform",
    },
  ]

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero
        title="Our Projects"
        subtitle="Explore our portfolio of innovative technology solutions that have transformed businesses across industries."
        backgroundImage="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-48 flex items-center justify-center">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-auto h-full object-contain max-w-full"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-pink-600">{project.category}</span>
                <h3 className="text-xl font-bold mt-2 group-hover:text-pink-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-600">{project.brief}</p>
                <div className="mt-4 flex items-center text-pink-600 font-medium">
                  <span>View Project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}
