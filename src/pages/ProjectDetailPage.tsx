"use client"

import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { ArrowUpRight, Calendar, MapPin, User, Zap, CheckCircle, Star } from "lucide-react"

interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  fullDescription?: string
  technologies?: string[]
  client?: string
  duration?: string
  location?: string
  services?: string[]
  challenge?: string
  solution?: string
  results?: string
  features?: string[]
  benefits?: string[]
}

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Enhanced project data with detailed information
    const projects: Project[] = [
      {
        id: "ai-companion-robot",
        title: "AI Companion Robot",
        category: "IoT",
        description:
          "A smart robot designed to give emotional support and talk to people. It can see, hear, and respond using a camera, microphone, and speaker.",
        image: "/images/Ai-companion-robot-project.png",
        fullDescription:
          "Our AI Companion Robot represents the cutting edge of social robotics, designed to provide emotional support and meaningful interaction for individuals seeking companionship. This advanced robotic system combines artificial intelligence, computer vision, and natural language processing to create an empathetic and responsive companion that can understand human emotions and provide appropriate support.",
        technologies: [
          "Computer Vision",
          "Natural Language Processing",
          "TensorFlow",
          "OpenCV",
          "Raspberry Pi",
          "Python",
          "Speech Recognition",
          "Emotion Detection",
        ],
        services: [
          "AI Algorithm Development",
          "Hardware Design",
          "Computer Vision Implementation",
          "Speech Processing",
          "Emotion Recognition",
          "Mobile App Development",
          "Cloud Integration",
        ],
        challenge:
          "The client needed a solution to address loneliness and provide emotional support for elderly residents in care facilities. The robot needed to be intuitive, safe, and capable of forming meaningful connections while respecting privacy and personal boundaries.",
        solution:
          "We developed an intelligent companion robot equipped with advanced sensors, cameras, and microphones that can recognize faces, interpret emotions, engage in natural conversations, and provide personalized companionship based on individual preferences and needs.",
        results:
          "The AI Companion Robot has been deployed in 15 senior care facilities, resulting in a 40% improvement in resident mood scores, 65% increase in social interaction, and 30% reduction in reported feelings of loneliness among participants.",
        features: [
          "Emotion recognition and empathetic responses",
          "Natural conversation abilities with voice interaction",
          "Facial recognition for personalized interactions",
          "Medication reminders and health monitoring",
          "Entertainment features including games and stories",
          "Video calling capabilities for family connections",
        ],
        benefits: [
          "Reduced feelings of loneliness and isolation",
          "Improved mental health and wellbeing",
          "Enhanced medication compliance",
          "Increased family connection opportunities",
          "Support for caregivers and staff",
        ],
      },
      {
        id: "git-lab-connect",
        title: "GitLab Connect Web App",
        category: "Web Development",
        description: "A web app that connects GitLab projects with GitHub repositories.",
        image: "/images/gitlab-connect-project.gif",
        fullDescription:
          "GitLab Connect is a comprehensive web application that bridges the gap between GitLab and GitHub ecosystems, enabling seamless project synchronization, collaboration, and workflow management across both platforms. This solution addresses the needs of development teams working with mixed repository environments.",
        technologies: [
          "React",
          "Node.js",
          "Express",
          "GitLab API",
          "GitHub API",
          "GraphQL",
          "PostgreSQL",
          "Redis",
          "Docker",
          "AWS",
        ],
        services: [
          "Full-Stack Web Development",
          "API Integration",
          "Database Design",
          "Cloud Deployment",
          "DevOps Implementation",
          "Security Implementation",
          "Performance Optimization",
        ],
        challenge:
          "The client was using both GitLab and GitHub for different projects and needed a unified way to manage repositories, synchronize code, track issues, and maintain consistent workflows across both platforms without losing platform-specific features.",
        solution:
          "We built a robust web application that provides real-time synchronization between GitLab and GitHub repositories, unified dashboard for project management, automated workflow triggers, and comprehensive analytics for both platforms.",
        results:
          "The GitLab Connect app has streamlined development workflows for over 200 developers, reduced project setup time by 60%, improved code synchronization accuracy by 95%, and increased team productivity by 35%.",
        features: [
          "Real-time repository synchronization",
          "Unified project dashboard and analytics",
          "Automated workflow and CI/CD integration",
          "Cross-platform issue tracking and management",
          "Team collaboration tools and notifications",
          "Advanced security and access control",
        ],
        benefits: [
          "Seamless workflow between GitLab and GitHub",
          "Reduced development overhead and complexity",
          "Improved team collaboration and communication",
          "Enhanced project visibility and tracking",
          "Automated synchronization saves manual effort",
        ],
      },
      {
        id: "inventory-management",
        title: "Inventory Management System",
        category: "App Development",
        description: "A mobile app for inventory management and supply chain optimization.",
        image: "/images/inventory-management-app-project.gif",
        fullDescription:
          "Our comprehensive Inventory Management System is a mobile-first solution designed to revolutionize how businesses track, manage, and optimize their inventory and supply chain operations. The system provides real-time visibility, predictive analytics, and automated workflows to minimize stockouts and reduce carrying costs.",
        technologies: [
          "React Native",
          "Node.js",
          "MongoDB",
          "Express",
          "Barcode Scanning",
          "IoT Sensors",
          "Machine Learning",
          "AWS",
          "GraphQL",
          "Real-time Analytics",
        ],
        services: [
          "Mobile App Development",
          "Backend API Development",
          "Database Architecture",
          "IoT Integration",
          "Analytics Dashboard",
          "Barcode Integration",
          "Cloud Infrastructure",
        ],
        challenge:
          "The client struggled with inventory discrepancies, stockouts, overstocking, and lack of real-time visibility across multiple warehouses and retail locations. Manual tracking processes were error-prone and time-consuming, leading to significant operational inefficiencies.",
        solution:
          "We developed a comprehensive mobile app with barcode scanning, real-time inventory tracking, predictive analytics for demand forecasting, automated reorder points, and integration with existing ERP systems to provide complete supply chain visibility.",
        results:
          "The Inventory Management System reduced stockouts by 45%, decreased inventory carrying costs by 30%, improved order accuracy to 99.2%, and increased overall operational efficiency by 50% across 25 locations.",
        features: [
          "Real-time inventory tracking and updates",
          "Barcode and QR code scanning capabilities",
          "Predictive analytics and demand forecasting",
          "Automated reorder points and alerts",
          "Multi-location inventory management",
          "Integration with existing ERP systems",
        ],
        benefits: [
          "Significant reduction in stockouts and overstock",
          "Improved inventory accuracy and visibility",
          "Automated processes reduce manual errors",
          "Better demand forecasting and planning",
          "Cost savings through optimized inventory levels",
        ],
      },
      {
        id: "online-learning-platform",
        title: "Online Learning Platform",
        category: "UI/UX Design",
        description: "A user-friendly platform for online education and learning.",
        image: "/images/UI.png",
        fullDescription:
          "Our Online Learning Platform represents a comprehensive educational ecosystem designed to deliver engaging, interactive, and personalized learning experiences. The platform combines modern UI/UX design principles with advanced educational technology to create an intuitive and effective learning environment for students of all ages.",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Figma",
          "Adobe Creative Suite",
          "Video Streaming",
          "Interactive Widgets",
          "Responsive Design",
          "Accessibility Standards",
        ],
        services: [
          "UI/UX Design",
          "User Research",
          "Prototyping",
          "Usability Testing",
          "Front-end Development",
          "Accessibility Implementation",
          "Design System Creation",
        ],
        challenge:
          "The client needed to create an engaging online learning platform that could compete with existing solutions while providing a superior user experience. The challenge was to make complex educational content accessible and engaging for diverse learning styles and age groups.",
        solution:
          "We designed a comprehensive learning platform with intuitive navigation, interactive content delivery, personalized learning paths, gamification elements, and adaptive design that works seamlessly across all devices and accessibility requirements.",
        results:
          "The Online Learning Platform achieved a 92% user satisfaction rate, 78% course completion rate (above industry average), 85% mobile usage adoption, and served over 50,000 active learners within the first year of launch.",
        features: [
          "Intuitive and responsive user interface",
          "Interactive content and multimedia integration",
          "Personalized learning paths and recommendations",
          "Progress tracking and analytics dashboard",
          "Gamification elements and achievement systems",
          "Collaborative tools and discussion forums",
        ],
        benefits: [
          "Enhanced user engagement and learning outcomes",
          "Improved accessibility for diverse learners",
          "Seamless experience across all devices",
          "Reduced learning curve for new users",
          "Higher course completion rates",
        ],
      },
      {
        id: "code-optimizer",
        title: "CodeTalk - AI Code Assistant",
        category: "Web Development",
        description: "The Online Code Analysis And Debugging Platform",
        image: "/images/code.png",
        fullDescription:
          "CodeTalk is an innovative AI-powered code assistant platform that revolutionizes software development by providing intelligent code analysis, debugging assistance, and optimization suggestions. This comprehensive platform helps developers write better code faster while learning best practices and improving their programming skills.",
        technologies: [
          "Python",
          "FastAPI",
          "React",
          "TypeScript",
          "OpenAI GPT",
          "Docker",
          "Kubernetes",
          "MongoDB",
          "Redis",
          "WebSockets",
          "Code Parsing",
          "Static Analysis",
        ],
        services: [
          "AI Development",
          "Web Platform Development",
          "Code Analysis Engine",
          "Real-time Chat Integration",
          "Cloud Architecture",
          "API Development",
          "Security Implementation",
        ],
        challenge:
          "Developers needed an intelligent assistant that could understand code context, provide accurate debugging help, suggest optimizations, and explain complex programming concepts in real-time without compromising code security or intellectual property.",
        solution:
          "We built an AI-powered platform that analyzes code in real-time, provides contextual suggestions, identifies bugs and security vulnerabilities, offers optimization recommendations, and includes an interactive chat interface for programming assistance.",
        results:
          "CodeTalk has helped over 10,000 developers reduce debugging time by 55%, improve code quality scores by 40%, accelerate learning for junior developers by 60%, and increase overall development productivity by 45%.",
        features: [
          "Real-time code analysis and error detection",
          "AI-powered debugging and optimization suggestions",
          "Interactive chat interface for programming help",
          "Security vulnerability scanning",
          "Performance optimization recommendations",
          "Multi-language support and integration",
        ],
        benefits: [
          "Faster debugging and problem resolution",
          "Improved code quality and maintainability",
          "Enhanced learning for developers",
          "Reduced development time and costs",
          "Better security and performance practices",
        ],
      },
    ]

    const foundProject = projects.find((p) => p.id === projectId)
    if (foundProject) {
      setProject(foundProject)
    }
    setLoading(false)
  }, [projectId])

  const handleDiscussProject = () => {
    navigate("/contact")
  }

  const handleRelatedProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          <p className="text-slate-600">Loading project details...</p>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 mx-auto mb-6 bg-slate-200 rounded-full flex items-center justify-center">
            <Star className="w-12 h-12 text-slate-400" />
          </div>
          <h1 className="text-3xl font-bold mb-4 text-slate-800">Project Not Found</h1>
          <p className="text-slate-600 mb-8">{"The project you're looking for doesn't exist or has been removed."}</p>
          <button
            onClick={() => navigate("/projects")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Explore All Projects
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              {/* Category Badge */}
              <div className="flex items-center space-x-3">
                <div className="bg-pink-500/20 text-pink-300 border border-pink-500/30 px-4 py-2 text-sm font-medium rounded-full flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  {project.category}
                </div>
                <div className="h-px bg-gradient-to-r from-pink-500/50 to-transparent flex-1"></div>
              </div>

              {/* Title and Description */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">{project.title}</h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-lg">{project.description}</p>
              </div>

              {/* Project Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.client && (
                  <div className="flex items-center space-x-3 text-slate-300">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide">Client</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                  </div>
                )}

                {project.duration && (
                  <div className="flex items-center space-x-3 text-slate-300">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide">Duration</p>
                      <p className="font-medium">{project.duration}</p>
                    </div>
                  </div>
                )}

                {project.location && (
                  <div className="flex items-center space-x-3 text-slate-300">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wide">Location</p>
                      <p className="font-medium">{project.location}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={handleDiscussProject}
                  className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-colors group inline-flex items-center"
                >
                  Start Your Project
                  <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative z-10 flex justify-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 max-w-[20rem] w-full">
                  <img
                    src={project.image || "/placeholder.svg?height=600&width=800"}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-800">Project Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 border-l-red-500">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">The Challenge</h3>
                  <p className="text-slate-600">{project.challenge}</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 border-l-green-500">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800">Our Solution</h3>
                  <p className="text-slate-600">{project.solution}</p>
                </div>
              </div>
            </div>

            {/* Features */}
            {project.features && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Results & Impact</h3>
                <p className="text-lg text-slate-700 leading-relaxed">{project.results}</p>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies?.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-md bg-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg sticky top-8">
              <div className="p-8 space-y-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Ready to Start?</h3>
                  <p className="text-slate-600 mb-6">Let's discuss your project requirements</p>
                  <button
                    onClick={handleDiscussProject}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Get Started Today
                  </button>
                </div>

                {project.services && (
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-4">Services Provided</h4>
                    <ul className="space-y-2">
                      {project.services.map((service, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.benefits && (
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-4">Key Benefits</h4>
                    <ul className="space-y-2">
                      {project.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
