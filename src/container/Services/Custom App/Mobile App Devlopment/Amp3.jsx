import React from 'react'; 
import { motion } from 'framer-motion';
import { Code, Download, HeadphonesIcon, Shield, Workflow } from 'lucide-react';

export default function Amp() {
  const features = [
    {
      title: 'Stable',
      description:
        'We build stable web applications that run consistently without any crashes and provide end-users with an error-free experience. We guarantee 99.99% uptime for all applications we deliver. This way, we help businesses improve engagement and drive constant sales flow.',
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: 'Scalable',
      description:
        'Our web apps development services imply building scalable web apps to accommodate customer evolving needs and growing businesses. We follow the key principles of scalable web architecture design to make sure web apps will handle increased load up to 1,000,000 users.',
      icon: <Workflow className="h-6 w-6" />,
    },
    {
      title: 'Fast',
      description:
        '53% of users will leave your website if it takes more than three seconds to load. So we apply mature technologies, such as Ruby on Rails or React, that have already proven their effectiveness. We have learned to make the most of them to guarantee the page loads in less than three seconds.',
      icon: <Download className="h-6 w-6" />,
    },
    {
      title: 'Mobile-first',
      description:
        'We adopt the mobile-first approach to offer a growing number of mobile users a better experience. We optimize web solutions for any mobile device, be it a smartphone, iPad, or tablet.',
      icon: <HeadphonesIcon className="h-6 w-6" />,
    },
    {
      title: 'Secure',
      description:
        'We apply the highest security standards to protect our web products from security risks outlined in OWASP Top 10 standard awareness document on the security of web apps. They are regularly updated to meet the latest security requirements.',
      icon: <Shield className="h-6 w-6" />,
    },
    {
      title: 'Well-planned',
      description:
        'We carefully plan each stage of the software development process. Such thoughtfulness helps us deliver 95% of the projects on time and within budget and avoid many potential pitfalls.',
      icon: <Code className="h-6 w-6" />,
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title} 
              className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 flex items-center">
                {feature.icon}
                <h3 className="ml-3 text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
