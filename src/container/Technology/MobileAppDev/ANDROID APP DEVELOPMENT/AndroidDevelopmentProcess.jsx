import { motion } from "framer-motion";

const steps = [
  {
    id: "1️⃣",
    title: "Requirement Gathering & Planning",
    description:
      "We begin by understanding your business goals, target audience, and app requirements. Our team collaborates with you to define a clear roadmap, ensuring a seamless development process.",
  },
  {
    id: "2️⃣",
    title: "UI/UX Design & Prototyping",
    description:
      "Our designers create visually appealing and user-friendly interfaces. We develop interactive prototypes to provide a preview of the app’s functionality and user experience.",
  },
  {
    id: "3️⃣",
    title: "App Development & Coding",
    description:
      "Our expert developers write clean, efficient, and scalable code using the latest technologies to ensure high performance and smooth functionality.",
  },
  {
    id: "4️⃣",
    title: "Testing & Quality Assurance",
    description:
      "We conduct rigorous testing, including functional, performance, and security tests, to ensure a bug-free and seamless user experience.",
  },
  {
    id: "5️⃣",
    title: "Deployment on Google Play Store",
    description:
      "Once the app meets all quality standards, we handle the deployment process, ensuring compliance with Google Play Store guidelines for a successful launch.",
  },
  {
    id: "6️⃣",
    title: "Post-Launch Support & Maintenance",
    description:
      "We provide ongoing support, updates, and optimizations to enhance app performance, fix issues, and keep up with evolving user needs.",
  },
];

const AndroidDevelopmentProcess = () => {
  return (
    <div className="bg-white text-gray-900 py-16 px-6 md:px-12">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Android Development Process
      </motion.h2>

      <div className="max-w-5xl mx-auto grid gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="bg-gray-100 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold flex items-center">
              <span className="mr-3 text-2xl md:text-3xl">{step.id}</span> {step.title}
            </h3>
            <p className="text-gray-600 mt-3">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AndroidDevelopmentProcess;
