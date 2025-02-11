import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaDatabase, FaServer, FaTools, FaBug } from "react-icons/fa";

const techStack = [
  { category: "Programming Languages", items: ["Kotlin", "Java", "Dart (Flutter)"], icon: <FaCode /> },
  { category: "UI Frameworks", items: ["Jetpack Compose", "XML Layouts"], icon: <FaPaintBrush /> },
  { category: "Backend Services", items: ["Firebase", "AWS", "Google Cloud"], icon: <FaServer /> },
  { category: "Databases", items: ["SQLite", "Room", "Firestore"], icon: <FaDatabase /> },
  { category: "DevOps & Deployment", items: ["Google Play Console", "Fastlane", "Jenkins"], icon: <FaTools /> },
  { category: "Testing & Debugging", items: ["JUnit", "Espresso", "Firebase Test Lab"], icon: <FaBug /> }
];

export default function TechStack() {
  return (
    <div className="p-10 bg-white text-black">
      <motion.h2 
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Tech Stack
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStack.map((tech, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-100 p-5 rounded-2xl shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl text-yellow-500 mb-3">{tech.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{tech.category}</h3>
                <ul className="text-gray-700">
                  {tech.items.map((item, i) => (
                    <motion.li key={i} whileHover={{ scale: 1.1 }}>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
