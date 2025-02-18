import { motion } from "framer-motion";
import { Star, Users, BarChart, Target } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";


export const BenefitsSection = () => {
  return (
    <WrapperContainer>
        <Heading>Why do you need website consulting?</Heading>
        <Paragraph>
          There are several benefits of website consulting services, including:
        </Paragraph>
      <div className="relative container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12">
        {/* Benefits List */}
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start space-x-4 p-6 rounded-xl bg-white shadow-md transition-all duration-500 hover:bg-blue-50 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Animated Icon */}
              <motion.div
                whileHover={{ scale: 1.3, rotate: 10 }}
                className="text-blue-600 w-10 h-10 p-2 rounded-full bg-blue-100 flex justify-center items-center shadow-md transition-transform"
              >
                {benefit.icon}
              </motion.div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 transition-all duration-300 hover:text-blue-600">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Section with Animated Hover Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 rounded-xl p-8 overflow-hidden relative shadow-lg"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
            alt="Team working"
            className="rounded-xl shadow-lg w-full transition-transform duration-500 hover:scale-110 hover:shadow-2xl"
          />
          {/* Glowing Effect on Hover */}
          <div className="absolute inset-0 bg-white opacity-10 transition-opacity duration-500 hover:opacity-20"></div>
        </motion.div>
      </div>
    </WrapperContainer>
  );
};

// Benefits Data
const benefits = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Set a positive first impression",
    description:
      "94% of first impressions are influenced by your website's design. Digiflex.ai creates visually engaging websites that impress and convert visitors.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Deliver a better user experience",
    description:
      "Over 85% of businesses invest in UX, as poor usability drives 89% of users away. Digiflex.ai ensures a seamless, intuitive experience for your visitors.",
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Drive more traffic to your website",
    description:
      "With expert SEO strategies, Digiflex.ai helps your website rank higher, gain visibility, and attract more visitors.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Increase your leads and conversions",
    description:
      "Digiflex.ai builds high-converting websites with optimized CTAs to transform visitors into customers.",
  },
];
