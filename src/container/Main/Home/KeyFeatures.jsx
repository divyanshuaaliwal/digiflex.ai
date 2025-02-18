import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const features = [
  {
    title: "AI-Powered Solutions",
    description: "Leverage cutting-edge artificial intelligence and machine learning algorithms to automate processes, predict trends, and make data-driven decisions.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop"
  },
  {
    title: "Cloud Transformation",
    description: "Seamlessly migrate and modernize your infrastructure with our comprehensive cloud solutions, ensuring scalability and security.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with our advanced security protocols, threat detection systems, and round-the-clock monitoring.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Digital Consulting",
    description: "Strategic guidance and expertise to help your business navigate the digital landscape and achieve sustainable growth.",
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "IoT Integration",
    description: "Connect and optimize your devices with our advanced IoT solutions, enabling smart operations and real-time monitoring.",
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "DevOps Excellence",
    description: "Streamline your development pipeline with our advanced DevOps practices, ensuring faster deployments and better collaboration.",
    imageUrl: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Enterprise Solutions",
    description: "Custom-built enterprise applications and solutions designed to meet your specific business requirements and challenges.",
    imageUrl: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Network Infrastructure",
    description: "Build and maintain robust network infrastructure with our comprehensive networking solutions and expertise.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Managed IT Services",
    description: "24/7 monitoring and management of your IT infrastructure, ensuring optimal performance and minimal downtime.",
    imageUrl: "https://images.unsplash.com/photo-1520869562399-e772f042f422?q=80&w=2070&auto=format&fit=crop"
  }
];

const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

function Gallery({ items, setIndex, index }) {
  const [isMobile, setIsMobile] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = useCallback((i) => {
    if (isMobile) return;
    const timeout = setTimeout(() => {
      setIndex(i);
    }, 200);
    setHoverTimeout(timeout);
  }, [setIndex, isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
  }, [hoverTimeout]);

  if (isMobile) {
    return (
      <div className="grid grid-cols-1 gap-4 px-4 py-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="relative rounded-xl overflow-hidden h-[300px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-fit mx-auto gap-1 flex overflow-x-auto ">
      {items.map((item, i) => (
        <motion.div
          whileTap={{ scale: 0.98 }}
          className={`rounded-xl relative ${
            index === i ? 'w-[300px] md:w-[450px]' : 'w-[50px]'
          } h-[400px] flex-shrink-0 transition-[width] ease-out duration-500 origin-center`}
          key={i}
          onClick={() => setIndex(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          <motion.img
            src={item.imageUrl}
            alt={item.title}
            className={`${
              index === i ? 'cursor-default' : 'cursor-pointer'
            } w-full rounded-xl h-full object-cover transition-all duration-700`}
          />
          <AnimatePresence mode="wait">
            {index === i && (
              <motion.article
                variants={article}
                initial="hidden"
                animate="show"
                className="absolute flex rounded-xl flex-col justify-end h-full top-0 p-6 space-y-3 overflow-hidden bg-gradient-to-t from-black/80 to-transparent"
              >
                <motion.h3
                  variants={article}
                  className="text-xl md:text-2xl font-semibold text-white"
                >
                  {item.title}
                </motion.h3>
                <motion.p variants={article} className="text-sm md:text-base text-gray-200 leading-relaxed">
                  {item.description}
                </motion.p>
              </motion.article>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export const KeyFeatures = () => {
  const [index, setIndex] = useState(4);

  return (
    <section className="py-10 md:py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className='text-blue-700' >Key</span> Features
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how Digiflex.ai is revolutionizing IT services with cutting-edge solutions
            that drive digital transformation and business growth.
          </p>
        </div>
        <Gallery items={features} index={index} setIndex={setIndex} />
      </div>
    </section>
  );
};

export default KeyFeatures;