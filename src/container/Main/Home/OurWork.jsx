import React from 'react';
import WrapperContainer from '../../../Layout/WrapperContainer';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from '../../../components/ui/linear-dialog';
import { Plus } from 'lucide-react';

const projects = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3",
    title: 'Tripocio Carnival',
    description: 'A revolutionary travel booking platform that transforms the way people plan and experience their journeys. Built with cutting-edge technology, Tripocio Carnival features an intuitive interface for booking flights, hotels, and experiences. The platform incorporates AI-powered recommendations, real-time pricing updates, and seamless payment integration. Key features include interactive travel maps, personalized itinerary building, and a unique "Memory Wall" where travelers can share their experiences.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'AI/ML'],
    duration: '6 months',
    client: 'Tripocio Travel Solutions',
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3",
    title: 'Tradeworld247',
    description: 'A sophisticated trading platform designed for 24/7 global market access. This comprehensive solution offers real-time market data, advanced charting tools, and automated trading capabilities. The platform features a secure authentication system, real-time notifications, and integration with multiple payment gateways. The dark-themed UI with neon accents provides excellent visibility for critical trading information while reducing eye strain during extended sessions.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'WebSocket', 'Docker'],
    duration: '8 months',
    client: 'TradeWorld Technologies',
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
    title: 'Arihant Capital',
    description: 'A modern financial services platform that revolutionizes wealth management and investment tracking. The system provides comprehensive portfolio management, real-time market analysis, and automated investment recommendations. Features include customizable dashboards, detailed financial reports, and secure document management. The clean, minimalist design ensures that complex financial data is presented in an easily digestible format.',
    technologies: ['Angular', 'Java Spring Boot', 'Oracle', 'Kubernetes', 'Redux'],
    duration: '12 months',
    client: 'Arihant Financial Services',
  }
];

export default function OurWork() {
  return (
    <WrapperContainer>
      <div className="h-full ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center p-5">
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Portfolio</h2>
            <h1 className="mt-2 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">Our <span className='text-blue-700'>Work</span></h1>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Discover how we've helped businesses transform their digital presence with cutting-edge solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project) => (
              <Dialog
                key={project.id}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 20,
                  mass: 1,
                  bounce: 0.02,
                  duration: 0.7,
                }}>
                <DialogTrigger
                  className="group flex flex-col overflow-hidden rounded-2xl border dark:border-gray-800 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 max-w-sm">
                  <DialogImage
                    src={project.url}
                    alt={project.title}
                    className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex flex-grow flex-row items-end justify-between p-6">
                    <div>
                      <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </DialogTitle>
                    </div>
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-900 transition-colors">
                      <Plus className="w-6 h-6" />
                    </button>
                  </div>
                </DialogTrigger>

                <DialogContainer className="pt-20">
                  <DialogContent className="relative flex h-full mx-auto flex-col overflow-y-auto rounded-3xl border dark:border-gray-800 bg-white dark:bg-gray-800 lg:w-[900px] w-[90%]">
                    <DialogImage
                      src={project.url}
                      alt={project.title}
                      className="h-[400px] w-full object-cover"
                    />
                    <div className="p-8">
                      <DialogTitle className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {project.title}
                      </DialogTitle>

                      <DialogDescription
                        className="space-y-6"
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: 20 },
                        }}>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                          {project.description}
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Technologies Used</h3>
                            <div className="mt-2 flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex gap-8">
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Duration</h3>
                              <p className="mt-1 text-sm text-gray-900 dark:text-white">{project.duration}</p>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Client</h3>
                              <p className="mt-1 text-sm text-gray-900 dark:text-white">{project.client}</p>
                            </div>
                          </div>
                        </div>
                      </DialogDescription>
                    </div>
                    <DialogClose className="absolute right-6 top-6 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors" />
                  </DialogContent>
                </DialogContainer>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </WrapperContainer>
  );
}
