import React from 'react';
import { motion } from 'framer-motion';
import { Search, Users2, Cog, TrendingUp } from 'lucide-react';
import ProcessCard from './ProcessCard';

function DevOpsProcess() {
  const processSteps = [
    {
      icon: Search,
      title: "Discovery & Assessment",
      description: "At Digiflex.ai, we start by diving deep into your existing processes, tools, and infrastructure. Our comprehensive assessment uncovers pain points, bottlenecks, and untapped opportunities, laying the foundation for a customized DevOps strategy that drives efficiency, scalability, and innovation."
    },
    {
      icon: Users2,
      title: "Strategy Development",
      description: "At Digiflex.ai, we craft a customized DevOps strategy aligned with your business objectives. Our approach includes selecting the optimal tools, streamlining processes, and setting clear, measurable goals to enhance efficiency, scalability, and innovation."
    },
    {
      icon: Cog,
      title: "Implementation & Integration",
      description: "At Digiflex.ai, our experts collaborate with your team to implement a robust DevOps strategy, ensuring seamless integration of tools and processes into your existing workflows. We provide hands-on guidance, continuous support, and best practices to drive efficiency and innovation."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "At Digiflex.ai, we view DevOps as an ongoing evolution. Our team continuously monitors performance, gathers actionable feedback, and refines processes to enhance efficiency, security, and scalability—ensuring your DevOps ecosystem stays ahead of the curve."
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
          }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-blue-900 text-center mb-16"
        >
          Our DevOps Consulting Process
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DevOpsProcess;
