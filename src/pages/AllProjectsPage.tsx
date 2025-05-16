import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import { Filter, Search } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const AllProjectsPage = () => {
  useEffect(() => {
    document.title = 'All Projects - Agency';
  }, []);

  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  // Categories for filtering
  const categories = ['All', 'IoT', 'Web Development', 'AI & Machine Learning', 'Mobile Apps'];

  useEffect(() => {
    // In a real app, this would be an API call
    // For now, we'll use mock data
    const allProjects: Project[] = [
      {
        id: 1,
        title: 'Smart Home Automation System',
        category: 'IoT',
        description: 'A comprehensive home automation solution that integrates lighting, security, and climate control systems.',
        image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 2,
        title: 'E-Commerce Platform',
        category: 'Web Development',
        description: 'A scalable e-commerce solution with integrated payment processing and inventory management.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 3,
        title: 'Predictive Maintenance System',
        category: 'AI & Machine Learning',
        description: 'An industrial IoT solution that predicts equipment failures before they occur, reducing downtime.',
        image: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 4,
        title: 'Inventory Management App',
        category: 'Mobile Apps',
        description: 'A mobile application for real-time inventory tracking and management across multiple locations.',
        image: 'https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 5,
        title: 'Healthcare Patient Portal',
        category: 'Web Development',
        description: 'A secure patient portal allowing access to medical records, appointment scheduling, and communication with healthcare providers.',
        image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 6,
        title: 'Industrial Sensor Network',
        category: 'IoT',
        description: 'A network of industrial sensors for monitoring environmental conditions and equipment performance in manufacturing facilities.',
        image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 7,
        title: 'Customer Sentiment Analysis',
        category: 'AI & Machine Learning',
        description: 'An AI-powered solution that analyzes customer feedback across multiple channels to identify trends and sentiment.',
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 8,
        title: 'Delivery Tracking App',
        category: 'Mobile Apps',
        description: 'A mobile application for real-time tracking of deliveries with driver routing and customer notifications.',
        image: 'https://images.pexels.com/photos/7706458/pexels-photo-7706458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      {
        id: 9,
        title: 'Smart Agriculture System',
        category: 'IoT',
        description: 'An IoT solution for monitoring soil conditions, automating irrigation, and optimizing crop yields.',
        image: 'https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
    ];

    setProjects(allProjects);
    setFilteredProjects(allProjects);
  }, []);

  // Filter projects based on category and search query
  useEffect(() => {
    let result = [...projects];
    
    // Apply category filter
    if (activeFilter !== 'All') {
      result = result.filter(project => project.category === activeFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        project => 
          project.title.toLowerCase().includes(query) || 
          project.description.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProjects(result);
  }, [activeFilter, searchQuery, projects]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title="Our Project Portfolio"
        subtitle="Explore our complete collection of innovative solutions across various industries and technologies."
        backgroundImage="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-6 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-auto"
            >
              <h2 className="text-3xl font-bold mb-2">All Projects</h2>
              <p className="text-gray-600">Showing {filteredProjects.length} of {projects.length} projects</p>
            </motion.div>
            
            <div className="w-full md:w-auto flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full sm:w-64"
                />
              </div>
              
              <div className="relative inline-block">
                <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-lg">
                  <Filter size={18} className="text-gray-500" />
                  <select
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value)}
                    className="bg-transparent appearance-none focus:outline-none pr-8 text-gray-700"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setActiveFilter('All');
                  setSearchQuery('');
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link 
                      to={`/projects/${project.id}`}
                      className="text-primary-600 font-medium flex items-center hover:text-primary-700"
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      <CTA />
    </motion.div>
  );
};

export default AllProjectsPage;
