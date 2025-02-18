import { motion } from "framer-motion";
import WrapperContainer from '../../../Layout/WrapperContainer';


export default function Expertie() {
  const stats = [
    {
      title: "CONSULTING",
      description: "We analyze your business needs and  strategic solutions to enhance efficiency, scalability, and innovation.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      suffix: "%",
    },
    {
      title: "UI/UX",
      description: "We focus on user research, wireframing, prototyping, and  testing to deliver seamless and impactful designs.",
      image:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      suffix: "%",
    },
    {
      title: "CUSTOM APPS",
      description: "We build high-performance, scalable, and secure applications tailored to your unique requirements.",
      image:
        "https://plus.unsplash.com/premium_photo-1661326248013-3107a4b2bd91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      suffix: "%",
    },
    {
      title: "DESIGN TESTING",
      description: "Bringing ideas to life through interactive prototypes and designs, we refine every detail before development.",
      image:
        "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      suffix: "sec",
    },
  ];

// Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <WrapperContainer>
      <div className="h-full bg-white py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            Our <span className="text-blue-700">Expertise</span>
          </h2>
          <p className="mt-4 text-black text-sm sm:text-base lg:text-lg mx-4 sm:mx-8">
            Our expertise spans across multiple domains to ensure seamless user experiences, 
            scalable applications, and innovative designs.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.02,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                },
              }}
              className="bg-white rounded-3xl p-4 sm:p-6 flex flex-col transform 
                transition-all duration-500 shadow-lg hover:shadow-blue-200 
                cursor-pointer h-full"
            >
              {/* Image Container */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6">
               <img
                  src={stat.image || "/placeholder.svg"}
                  alt={stat.title}
                  className="w-full h-full object-cover transition-all duration-100 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-black text-xl sm:text-2xl font-bold tracking-wide sm:tracking-wider mb-3 sm:mb-4 uppercase">
                  {stat.title}
                </h3>

                <p className="text-black text-sm sm:text-base tracking-wide sm:tracking-widest">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Scroll Indicator - Only visible on small screens */}
        <div className="mt-6 text-center text-sm text-gray-500 sm:hidden">
          Scroll to see more →
        </div>
      </div>
    </WrapperContainer>
  );
}