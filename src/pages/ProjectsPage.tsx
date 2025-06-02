import { useNavigate } from 'react-router-dom';

export default function ProjectsPage() {
  const navigate = useNavigate();
  const projects = [
    {
      id: "ai-companion-robot",
      title: "AI Companion Robot",
      category: "IoT",
      image:  "/images/AI-COMPANION.png"  ,
      brief: "A smart robot designed to give emotional support and talk to people. It can see, hear, and respond using a camera, microphone, and speaker.",
    },
    {
      id: "git-lab-connect",
      title: "GitLab Connect Web App",
      category: "Web Development",
      image: "/images/GITLAB.png",
      brief: "A web app that connects GitLab projects with GitHub repositories.",
    },
    {
      id: "inventory-management",
      title: "Inventory Management System",
      category: "App Development",
      image: "/images/INVENTORY.png",
      brief: "A mobile app for inventory management and supply chain optimization.",
    },
    {
      id: "online-learning-platform",
      title: "Online Learning Platform",
      category: "UI/UX Design",
      image: "/images/ONLINE.png",
      brief: "Design A user-friendly platform for online education and learning.",
    },
    {
      id: "code-optimizer",
      title: "CodeTalk - AI Code Assistant",
      category: "Web Development",
      image: "/images/CODETALK.png",
      brief: "The Online Code Analysis And Debugging Platform",
    },
    {
      id: "mental-health-chatbot",
      title: "Mental Health Chatbot",
      category: "AI / ML",
      image: "/images/MENTAL.png",
      brief: "A chatbot that provides personalized support for mental health issues.",
    },
  ]

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  }

  return (
    <main className="min-h-screen " >
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our portfolio of innovative technology solutions that have transformed businesses across industries.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative h-60">
                <img 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
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
    </main>
  )
}