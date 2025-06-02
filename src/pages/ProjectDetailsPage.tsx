import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  {
    id: "ai-companion-robot",
    title: "AI Companion Robot",
    category: "IoT",
    image: "/images/AI-COMPANION.png",
    brief: "A smart robot designed to give emotional support and talk to people. It can see, hear, and respond using a camera, microphone, and speaker.",
    description: "Our AI Companion Robot project represents a breakthrough in emotional support technology. The robot uses advanced computer vision and natural language processing to understand and respond to human emotions. It features real-time facial recognition, voice analysis, and adaptive learning capabilities to provide personalized interaction and support.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Raspberry Pi", "ROS"],
    features: [
      "Real-time emotion detection",
      "Natural language conversation",
      "Adaptive learning system",
      "Voice recognition and synthesis",
      "Mobile app integration"
    ]
  },
  {
    id: "git-lab-connect",
    title: "GitLab Connect Web App",
    category: "Web Development",
    image: "/images/GITLAB.png",
    brief: "A web app that connects GitLab projects with GitHub repositories.",
    description: "GitLab Connect is a powerful web application that bridges the gap between GitLab and GitHub ecosystems. It enables seamless project synchronization, automated workflow management, and unified repository access across both platforms.",
    technologies: ["React", "Node.js", "GraphQL", "Docker", "AWS"],
    features: [
      "Cross-platform repository sync",
      "Automated workflow management",
      "Real-time collaboration tools",
      "Custom webhook integration",
      "Advanced analytics dashboard"
    ]
  },
  {
    id: "inventory-management",
    title: "Inventory Management System",
    category: "App Development",
    image: "/images/INVENTORY.png",
    brief: "A mobile app for inventory management and supply chain optimization.",
    description: "Our Inventory Management System is a comprehensive solution for businesses to track, manage, and optimize their inventory and supply chain operations. The system provides real-time insights and automated workflows to improve efficiency and reduce costs.",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB", "AWS"],
    features: [
      "Real-time inventory tracking",
      "Automated reordering system",
      "Supply chain analytics",
      "Barcode scanning",
      "Multi-location support"
    ]
  },
  {
    id: "online-learning-platform",
    title: "Online Learning Platform",
    category: "UI/UX Design",
    image: "/images/ONLINE.png",
    brief: "Design A user-friendly platform for online education and learning.",
    description: "Our Online Learning Platform is designed to provide an engaging and interactive learning experience. The platform features intuitive course management, real-time progress tracking, and interactive learning tools to enhance student engagement and success.",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS"],
    features: [
      "Interactive course content",
      "Real-time progress tracking",
      "Live video sessions",
      "Discussion forums",
      "Assessment tools"
    ]
  },
  {
    id: "code-optimizer",
    title: "CodeTalk - AI Code Assistant",
    category: "Web Development",
    image: "/images/CODETALK.png",
    brief: "The Online Code Analysis And Debugging Platform",
    description: "CodeTalk is an AI-powered code assistant that helps developers write better code, find bugs, and optimize performance. The platform uses advanced machine learning algorithms to analyze code and provide intelligent suggestions for improvement.",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "Docker"],
    features: [
      "AI code analysis",
      "Automated bug detection",
      "Performance optimization",
      "Code style suggestions",
      "Real-time collaboration"
    ]
  },
  {
    id: "mental-health-chatbot",
    title: "Mental Health Chatbot",
    category: "AI / ML",
    image: "/images/MENTAL.png",
    brief: "A chatbot that provides personalized support for mental health issues.",
    description: "Our Mental Health Chatbot is an AI-powered support system designed to provide immediate assistance and guidance for mental health concerns. The chatbot uses natural language processing and machine learning to understand user needs and provide appropriate support and resources.",
    technologies: ["Python", "TensorFlow", "NLP", "React", "Node.js"],
    features: [
      "24/7 emotional support",
      "Personalized responses",
      "Resource recommendations",
      "Crisis detection",
      "Progress tracking"
    ]
  }
];

export default function ProjectDetailsPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Project not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent-500 font-medium">{project.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">{project.title}</h1>
            <p className="text-xl max-w-3xl">{project.brief}</p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{project.description}</p>
              
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-center text-gray-600"
                  >
                    <svg
                      className="w-5 h-5 text-accent-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-xl font-bold mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 