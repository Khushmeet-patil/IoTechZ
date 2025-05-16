import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  fullDescription?: string;
  technologies?: string[];
  client?: string;
  duration?: string;
  challenge?: string;
  solution?: string;
  results?: string;
}

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use mock data
    const projects: Project[] = [
      {
        id: 1,
        title: 'Smart Home Automation System',
        category: 'IoT',
        description: 'A comprehensive home automation solution that integrates lighting, security, and climate control systems.',
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        fullDescription: 'Our Smart Home Automation System is designed to transform ordinary homes into intelligent living spaces. The system seamlessly integrates various home components including lighting, security cameras, door locks, thermostats, and entertainment systems into a unified, easy-to-control platform.',
        technologies: ['Raspberry Pi', 'Node.js', 'React', 'MQTT', 'Z-Wave', 'Zigbee'],
        client: 'Residential Property Developer',
        duration: '6 months',
        challenge: 'The client needed a flexible, scalable home automation solution that could be installed in new construction homes and easily customized by homeowners. The system needed to be user-friendly while offering advanced features for tech-savvy users.',
        solution: 'We developed a modular IoT platform with a central hub that communicates with various smart devices using industry-standard protocols. The system includes a mobile app and voice control integration, allowing homeowners to control their environment through multiple interfaces.',
        results: 'The Smart Home Automation System has been installed in over 50 new homes, with excellent feedback from homeowners. Energy consumption in these homes has decreased by an average of 23%, and the developer has reported increased property values due to the smart home features.'
      },
      {
        id: 2,
        title: 'E-Commerce Platform',
        category: 'Web Development',
        description: 'A scalable e-commerce solution with integrated payment processing and inventory management.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        fullDescription: 'This comprehensive e-commerce platform provides businesses with everything they need to sell products online. The solution includes product catalog management, shopping cart functionality, secure payment processing, order management, and inventory tracking.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API', 'AWS'],
        client: 'Retail Chain',
        duration: '4 months',
        challenge: 'The client needed to quickly establish an online presence during the pandemic to continue serving customers when physical stores were closed. They required a solution that would integrate with their existing inventory system and provide a seamless shopping experience.',
        solution: 'We developed a custom e-commerce platform that matched their brand identity and integrated with their existing systems. The platform includes features like real-time inventory updates, multiple payment options, and a responsive design that works across all devices.',
        results: 'The e-commerce platform allowed the client to maintain 85% of their pre-pandemic sales volume during store closures. Online sales have continued to grow even after stores reopened, now accounting for 40% of total revenue.'
      },
      {
        id: 3,
        title: 'Predictive Maintenance System',
        category: 'AI & Machine Learning',
        description: 'An industrial IoT solution that predicts equipment failures before they occur, reducing downtime.',
        image: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        fullDescription: 'Our Predictive Maintenance System uses machine learning algorithms and IoT sensors to monitor industrial equipment and predict potential failures before they occur. This allows maintenance teams to address issues proactively, minimizing costly downtime and extending equipment lifespan.',
        technologies: ['Python', 'TensorFlow', 'Industrial IoT Sensors', 'Azure IoT Hub', 'Power BI', 'Custom ML Models'],
        client: 'Manufacturing Company',
        duration: '8 months',
        challenge: 'The client was experiencing significant production losses due to unexpected equipment failures. Traditional scheduled maintenance was not effectively preventing breakdowns, and reactive maintenance was costly and disruptive.',
        solution: 'We implemented a network of IoT sensors to monitor key equipment parameters such as temperature, vibration, and power consumption. Our custom machine learning models analyze this data to identify patterns that precede failures, allowing maintenance to be scheduled before breakdowns occur.',
        results: 'After implementing the Predictive Maintenance System, the client has experienced a 78% reduction in unplanned downtime, a 34% decrease in maintenance costs, and a 15% increase in equipment lifespan. The system paid for itself within the first year of operation.'
      }
    ];

    const foundProject = projects.find(p => p.id === parseInt(id || '0'));

    if (foundProject) {
      setProject(foundProject);
      document.title = `${foundProject.title} - Agency`;
    } else {
      document.title = 'Project Not Found - Agency';
    }

    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-gray-600 mb-6">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/projects" className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-[50vh] bg-black">
        <div
          className="absolute inset-0 opacity-60 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="container-custom relative z-10 h-full flex flex-col justify-end pb-12">
          <Link to="/projects" className="text-white mb-6 inline-flex items-center hover:underline">
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-primary-600 rounded-full mb-3">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg max-w-none"
              >
                <h2>Overview</h2>
                <p>{project.fullDescription}</p>

                <h2>Challenge</h2>
                <p>{project.challenge}</p>

                <h2>Solution</h2>
                <p>{project.solution}</p>

                <h2>Results</h2>
                <p>{project.results}</p>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 p-6 rounded-lg sticky top-24"
              >
                <h3 className="text-xl font-bold mb-4">Project Details</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm text-gray-500">CLIENT</h4>
                    <p className="font-medium">{project.client}</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-gray-500">DURATION</h4>
                    <p className="font-medium">{project.duration}</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-gray-500">TECHNOLOGIES</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.technologies?.map((tech, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetailPage;
