import { motion } from "framer-motion";
import { FaCode, FaCogs, FaToolbox, FaDatabase, FaCloud, FaBug } from "react-icons/fa";

export default function TechStack() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-gray-100 py-16 px-6 md:px-16 lg:px-24">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-wide">Our Tech Stack</h2>
        <p className="text-lg text-gray-600 mb-12">
          We leverage the latest technologies to build robust and high-performing iOS applications.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-6 cursor-pointer border border-gray-200 hover:border-blue-600 transition-all hover:shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <tech.icon className="text-4xl text-blue-600" />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{tech.category}</h3>
              <p className="text-gray-600 text-md">{tech.items}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

const techStack = [
  { category: "Languages", items: "Swift, Objective-C", icon: FaCode },
  { category: "Frameworks", items: "SwiftUI, UIKit, Core Data", icon: FaCogs },
  { category: "Tools", items: "Xcode, TestFlight, Firebase", icon: FaToolbox },
  { category: "Databases", items: "SQLite, Realm, Core Data", icon: FaDatabase },
  { category: "Cloud Services", items: "AWS, Firebase, Google Cloud", icon: FaCloud },
  { category: "Testing & Debugging", items: "XCTest, XCUITest, Firebase Test Lab", icon: FaBug }
];
