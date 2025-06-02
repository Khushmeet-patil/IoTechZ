import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  fullDescription?: string;
  technologies?: string[];
  client?: string;
  duration?: string;
  location?: string;
  services?: string[];
  challenge?: string;
  solution?: string;
  results?: string;
  features?: string[];
  benefits?: string[];
}

const ProjectDetailPage = ({ projectId = "ai-companion-robot" }: { projectId?: string }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Enhanced project data with detailed information
    const projects: Project[] = [
      {
        id: "ai-companion-robot",
        title: "AI Companion Robot",
        category: "IoT",
        description: "A smart robot designed to give emotional support and talk to people. It can see, hear, and respond using a camera, microphone, and speaker.",
        image: "/images/AI-COMPANION.png",
        fullDescription: "Our AI Companion Robot represents the cutting edge of social robotics, designed to provide emotional support and meaningful interaction for individuals seeking companionship. This advanced robotic system combines artificial intelligence, computer vision, and natural language processing to create an empathetic and responsive companion that can understand human emotions and provide appropriate support.",
        technologies: ['Computer Vision', 'Natural Language Processing', 'TensorFlow', 'OpenCV', 'Raspberry Pi', 'Python', 'Speech Recognition', 'Emotion Detection'],
        client: 'Senior Care Facilities Network',
        duration: '12 months',
        location: 'San Francisco, CA',
        services: ['AI Algorithm Development', 'Hardware Design', 'Computer Vision Implementation', 'Speech Processing', 'Emotion Recognition', 'Mobile App Development', 'Cloud Integration'],
        challenge: 'The client needed a solution to address loneliness and provide emotional support for elderly residents in care facilities. The robot needed to be intuitive, safe, and capable of forming meaningful connections while respecting privacy and personal boundaries.',
        solution: 'We developed an intelligent companion robot equipped with advanced sensors, cameras, and microphones that can recognize faces, interpret emotions, engage in natural conversations, and provide personalized companionship based on individual preferences and needs.',
        results: 'The AI Companion Robot has been deployed in 15 senior care facilities, resulting in a 40% improvement in resident mood scores, 65% increase in social interaction, and 30% reduction in reported feelings of loneliness among participants.',
        features: [
          'Emotion recognition and empathetic responses',
          'Natural conversation abilities with voice interaction',
          'Facial recognition for personalized interactions',
          'Medication reminders and health monitoring',
          'Entertainment features including games and stories',
          'Video calling capabilities for family connections'
        ],
        benefits: [
          'Reduced feelings of loneliness and isolation',
          'Improved mental health and wellbeing',
          'Enhanced medication compliance',
          'Increased family connection opportunities',
          'Support for caregivers and staff'
        ]
      },
      {
        id: "git-lab-connect",
        title: "GitLab Connect Web App",
        category: "Web Development",
        description: "A web app that connects GitLab projects with GitHub repositories.",
        image: "/images/GITLAB.png",
        fullDescription: "GitLab Connect is a comprehensive web application that bridges the gap between GitLab and GitHub ecosystems, enabling seamless project synchronization, collaboration, and workflow management across both platforms. This solution addresses the needs of development teams working with mixed repository environments.",
        technologies: ['React', 'Node.js', 'Express', 'GitLab API', 'GitHub API', 'GraphQL', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
        client: 'Enterprise Software Development Company',
        duration: '8 months',
        location: 'Austin, TX',
        services: ['Full-Stack Web Development', 'API Integration', 'Database Design', 'Cloud Deployment', 'DevOps Implementation', 'Security Implementation', 'Performance Optimization'],
        challenge: 'The client was using both GitLab and GitHub for different projects and needed a unified way to manage repositories, synchronize code, track issues, and maintain consistent workflows across both platforms without losing platform-specific features.',
        solution: 'We built a robust web application that provides real-time synchronization between GitLab and GitHub repositories, unified dashboard for project management, automated workflow triggers, and comprehensive analytics for both platforms.',
        results: 'The GitLab Connect app has streamlined development workflows for over 200 developers, reduced project setup time by 60%, improved code synchronization accuracy by 95%, and increased team productivity by 35%.',
        features: [
          'Real-time repository synchronization',
          'Unified project dashboard and analytics',
          'Automated workflow and CI/CD integration',
          'Cross-platform issue tracking and management',
          'Team collaboration tools and notifications',
          'Advanced security and access control'
        ],
        benefits: [
          'Seamless workflow between GitLab and GitHub',
          'Reduced development overhead and complexity',
          'Improved team collaboration and communication',
          'Enhanced project visibility and tracking',
          'Automated synchronization saves manual effort'
        ]
      },
      {
        id: "inventory-management",
        title: "Inventory Management System",
        category: "App Development",
        description: "A mobile app for inventory management and supply chain optimization.",
        image: "/images/INVENTORY.png",
        fullDescription: "Our comprehensive Inventory Management System is a mobile-first solution designed to revolutionize how businesses track, manage, and optimize their inventory and supply chain operations. The system provides real-time visibility, predictive analytics, and automated workflows to minimize stockouts and reduce carrying costs.",
        technologies: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Barcode Scanning', 'IoT Sensors', 'Machine Learning', 'AWS', 'GraphQL', 'Real-time Analytics'],
        client: 'Retail Chain & Distribution Company',
        duration: '10 months',
        location: 'Chicago, IL',
        services: ['Mobile App Development', 'Backend API Development', 'Database Architecture', 'IoT Integration', 'Analytics Dashboard', 'Barcode Integration', 'Cloud Infrastructure'],
        challenge: 'The client struggled with inventory discrepancies, stockouts, overstocking, and lack of real-time visibility across multiple warehouses and retail locations. Manual tracking processes were error-prone and time-consuming, leading to significant operational inefficiencies.',
        solution: 'We developed a comprehensive mobile app with barcode scanning, real-time inventory tracking, predictive analytics for demand forecasting, automated reorder points, and integration with existing ERP systems to provide complete supply chain visibility.',
        results: 'The Inventory Management System reduced stockouts by 45%, decreased inventory carrying costs by 30%, improved order accuracy to 99.2%, and increased overall operational efficiency by 50% across 25 locations.',
        features: [
          'Real-time inventory tracking and updates',
          'Barcode and QR code scanning capabilities',
          'Predictive analytics and demand forecasting',
          'Automated reorder points and alerts',
          'Multi-location inventory management',
          'Integration with existing ERP systems'
        ],
        benefits: [
          'Significant reduction in stockouts and overstock',
          'Improved inventory accuracy and visibility',
          'Automated processes reduce manual errors',
          'Better demand forecasting and planning',
          'Cost savings through optimized inventory levels'
        ]
      },
      {
        id: "online-learning-platform",
        title: "Online Learning Platform",
        category: "UI/UX Design",
        description: "A user-friendly platform for online education and learning.",
        image: "/images/ONLINE.png",
        fullDescription: "Our Online Learning Platform represents a comprehensive educational ecosystem designed to deliver engaging, interactive, and personalized learning experiences. The platform combines modern UI/UX design principles with advanced educational technology to create an intuitive and effective learning environment for students of all ages.",
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma', 'Adobe Creative Suite', 'Video Streaming', 'Interactive Widgets', 'Responsive Design', 'Accessibility Standards'],
        client: 'Educational Technology Company',
        duration: '6 months',
        location: 'Boston, MA',
        services: ['UI/UX Design', 'User Research', 'Prototyping', 'Usability Testing', 'Front-end Development', 'Accessibility Implementation', 'Design System Creation'],
        challenge: 'The client needed to create an engaging online learning platform that could compete with existing solutions while providing a superior user experience. The challenge was to make complex educational content accessible and engaging for diverse learning styles and age groups.',
        solution: 'We designed a comprehensive learning platform with intuitive navigation, interactive content delivery, personalized learning paths, gamification elements, and adaptive design that works seamlessly across all devices and accessibility requirements.',
        results: 'The Online Learning Platform achieved a 92% user satisfaction rate, 78% course completion rate (above industry average), 85% mobile usage adoption, and served over 50,000 active learners within the first year of launch.',
        features: [
          'Intuitive and responsive user interface',
          'Interactive content and multimedia integration',
          'Personalized learning paths and recommendations',
          'Progress tracking and analytics dashboard',
          'Gamification elements and achievement systems',
          'Collaborative tools and discussion forums'
        ],
        benefits: [
          'Enhanced user engagement and learning outcomes',
          'Improved accessibility for diverse learners',
          'Seamless experience across all devices',
          'Reduced learning curve for new users',
          'Higher course completion rates'
        ]
      },
      {
        id: "code-optimizer",
        title: "CodeTalk - AI Code Assistant",
        category: "Web Development",
        description: "The Online Code Analysis And Debugging Platform",
        image: "/images/CODETALK.png",
        fullDescription: "CodeTalk is an innovative AI-powered code assistant platform that revolutionizes software development by providing intelligent code analysis, debugging assistance, and optimization suggestions. This comprehensive platform helps developers write better code faster while learning best practices and improving their programming skills.",
        technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'OpenAI GPT', 'Docker', 'Kubernetes', 'MongoDB', 'Redis', 'WebSockets', 'Code Parsing', 'Static Analysis'],
        client: 'Software Development Agency',
        duration: '14 months',
        location: 'Seattle, WA',
        services: ['AI Development', 'Web Platform Development', 'Code Analysis Engine', 'Real-time Chat Integration', 'Cloud Architecture', 'API Development', 'Security Implementation'],
        challenge: 'Developers needed an intelligent assistant that could understand code context, provide accurate debugging help, suggest optimizations, and explain complex programming concepts in real-time without compromising code security or intellectual property.',
        solution: 'We built an AI-powered platform that analyzes code in real-time, provides contextual suggestions, identifies bugs and security vulnerabilities, offers optimization recommendations, and includes an interactive chat interface for programming assistance.',
        results: 'CodeTalk has helped over 10,000 developers reduce debugging time by 55%, improve code quality scores by 40%, accelerate learning for junior developers by 60%, and increase overall development productivity by 45%.',
        features: [
          'Real-time code analysis and error detection',
          'AI-powered debugging and optimization suggestions',
          'Interactive chat interface for programming help',
          'Security vulnerability scanning',
          'Performance optimization recommendations',
          'Multi-language support and integration'
        ],
        benefits: [
          'Faster debugging and problem resolution',
          'Improved code quality and maintainability',
          'Enhanced learning for developers',
          'Reduced development time and costs',
          'Better security and performance practices'
        ]
      },
      {
        id: "mental-health-chatbot",
        title: "Mental Health Chatbot",
        category: "AI / ML",
        description: "A chatbot that provides personalized support for mental health issues.",
        image: "/images/MENTAL.png",
        fullDescription: "Our Mental Health Chatbot is a compassionate AI-driven platform designed to provide accessible, confidential, and personalized mental health support. Using advanced natural language processing and therapeutic techniques, the chatbot offers 24/7 emotional support, coping strategies, and mental wellness resources to users seeking help.",
        technologies: ['Python', 'TensorFlow', 'Natural Language Processing', 'Sentiment Analysis', 'DialogFlow', 'React', 'Node.js', 'MongoDB', 'HIPAA Compliance', 'Encryption'],
        client: 'Mental Health Services Organization',
        duration: '16 months',
        location: 'Denver, CO',
        services: ['AI/ML Development', 'Therapeutic Algorithm Design', 'Privacy & Security Implementation', 'Mobile App Development', 'Clinical Integration', 'Compliance Consulting', 'User Experience Design'],
        challenge: 'Many individuals struggle to access timely mental health support due to barriers like cost, availability, stigma, and geographic limitations. The client needed a solution that could provide immediate, confidential support while maintaining therapeutic effectiveness and ensuring user safety.',
        solution: 'We developed an intelligent chatbot that uses evidence-based therapeutic techniques, provides personalized coping strategies, offers crisis intervention capabilities, maintains strict privacy standards, and seamlessly connects users with human professionals when needed.',
        results: 'The Mental Health Chatbot has supported over 25,000 users, achieved 89% user satisfaction rate, provided 24/7 availability with average response time under 2 seconds, and successfully identified and escalated 95% of crisis situations to appropriate human support.',
        features: [
          'Personalized therapeutic conversations and support',
          'Evidence-based coping strategies and techniques',
          'Crisis detection and intervention capabilities',
          'Mood tracking and progress monitoring',
          '24/7 availability and immediate response',
          'Seamless escalation to human professionals'
        ],
        benefits: [
          'Immediate access to mental health support',
          'Reduced barriers to seeking help',
          'Confidential and judgment-free environment',
          'Cost-effective mental wellness solution',
          'Complementary support to traditional therapy'
        ]
      }
    ];

    const foundProject = projects.find(p => p.id === projectId);

    if (foundProject) {
      setProject(foundProject);
    }

    setLoading(false);
  }, [projectId]);

  const handleBackToProjects = () => {
    // In a real app, this would use router navigation
    console.log('Navigate back to projects');
  };

  const handleDiscussProject = () => {
    // In a real app, this would navigate to contact page
    console.log('Navigate to contact page');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={handleBackToProjects}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <button 
                onClick={handleBackToProjects}
                className="text-white mb-6 inline-flex items-center hover:underline"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Projects
              </button>
              <span className="text-pink-400 font-medium">{project.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">{project.title}</h1>
              <p className="text-xl">{project.description}</p>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-700 mb-6">{project.fullDescription}</p>

            <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
            <p className="text-gray-700 mb-6">{project.challenge}</p>

            <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
            <p className="text-gray-700 mb-6">{project.solution}</p>

            {project.features && (
              <>
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            <h3 className="text-2xl font-bold mb-4">Results & Impact</h3>
            <p className="text-gray-700 mb-6">{project.results}</p>

            {project.benefits && (
              <>
                <h3 className="text-2xl font-bold mb-4">Benefits Delivered</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  {project.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </>
            )}

            <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies?.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>

              <div className="mb-4">
                <h4 className="text-sm text-gray-500">CLIENT</h4>
                <p className="font-medium">{project.client}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm text-gray-500">DURATION</h4>
                <p className="font-medium">{project.duration}</p>
              </div>

              {project.location && (
                <div className="mb-4">
                  <h4 className="text-sm text-gray-500">LOCATION</h4>
                  <p className="font-medium">{project.location}</p>
                </div>
              )}

              {project.services && (
                <div className="mb-4">
                  <h4 className="text-sm text-gray-500">SERVICES PROVIDED</h4>
                  <ul className="list-disc pl-5 text-sm">
                    {project.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              )}

              <button
                onClick={handleDiscussProject}
                className="mt-6 block w-full bg-pink-600 text-white text-center py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Related Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="relative h-48">
                <img
                  src="/images/GITLAB.png"
                  alt="GitLab Connect Web App"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-pink-600">Web Development</span>
                <h3 className="text-xl font-bold mt-2 group-hover:text-pink-600 transition-colors duration-300">
                  GitLab Connect Web App
                </h3>
              </div>
            </div>

            <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="relative h-48">
                <img
                  src="/images/INVENTORY.png"
                  alt="Inventory Management System"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-pink-600">App Development</span>
                <h3 className="text-xl font-bold mt-2 group-hover:text-pink-600 transition-colors duration-300">
                  Inventory Management System
                </h3>
              </div>
            </div>

            <div className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <div className="relative h-48">
                <img
                  src="/images/CODETALK.png"
                  alt="CodeTalk - AI Code Assistant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-pink-600">Web Development</span>
                <h3 className="text-xl font-bold mt-2 group-hover:text-pink-600 transition-colors duration-300">
                  CodeTalk - AI Code Assistant
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;