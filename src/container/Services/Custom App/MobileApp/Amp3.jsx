import React from 'react';
import { Code, Download, HeadphonesIcon, Shield, Workflow } from 'lucide-react';

export default function Amp() {
  const features = [
    {
      title: 'Stable',
      description:
        'We build stable web applications that run consistently without any crashes and provide end-users with an error-free experience. We guarantee 99.99% uptime for all applications we deliver. This way, we help businesses improve engagement and drive constant sales flow.',
    },
    {
      title: 'Scalable',
      description:
        'Our web apps development services imply building scalable web apps to accommodate customer evolving needs and growing businesses. We follow the key principles of scalable web architecture design to make sure web apps will handle increased load up to 1,000,000 users.',
    },
    {
      title: 'Fast',
      description:
        '53% of users will leave your website if it takes more than three seconds to load. So we apply mature technologies, such as Ruby on Rails or React, that have already proven their effectiveness. We have learned to make the most of them to guarantee the page loads in less than three seconds.',
    },
    {
      title: 'Mobile-first',
      description:
        'We adopt the mobile-first approach to offer a growing number of mobile users a better experience. We optimize web solutions for any mobile device, be it a smartphone, iPad, or tablet.',
    },
    {
      title: 'Secure',
      description:
        'We apply the highest security standards to protect our web products from security risks outlined in OWASP Top 10 standard awareness document on the security of web apps. They are regularly updated to meet the latest security requirements.',
    },
    {
      title: 'Well-planned',
      description:
        'We carefully plan each stage of the software development process. Such thoughtfulness helps us deliver 95% of the projects on time and within budget and avoid many potential pitfalls.',
    },
  ];

  const processSteps = [
    {
      icon: <Workflow className="h-6 w-6" />,
      title: 'Infrastructure & Architecture',
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Development & Testing',
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: 'Release Train Delivery',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Compliance',
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: 'Support',
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md">
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-[#cce7ff] via-[#80b3ff] to-[#172554] p-14 shadow-lg">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-white">Our Development Process</h2>
          <p className="mt-4 text-lg text-white opacity-85">
            Our streamlined approach ensures efficiency at each phase, guiding you from idea to execution seamlessly.
          </p>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center bg-white p-10 rounded-lg shadow-xl transition-transform transform hover:scale-105">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-[#0066cc] to-[#80b3ff] text-white">
                {step.icon}
              </div>
              <p className="text-xl font-semibold text-[#0066cc]">{step.title}</p>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      
      
      
      
      
      
      
      
        </div>
      </div>
    </section>
  );
}
