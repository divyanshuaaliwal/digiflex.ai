import React, { useState } from "react";
import { motion } from "framer-motion";

// Importing icons
import TerraformIcon from "../../../../assets/Terraform.svg";
import AwsCdkIcon from "../../../../assets/AWS.svg";
import AnsibleIcon from "../../../../assets/Ansible.svg";
import JenkinsIcon from "../../../../assets/Jenkins.svg";
import GitLabIcon from "../../../../assets/GitLab.svg";
import CircleCIIcon from "../../../../assets/CircleCI.svg";
import TravisCIIcon from "../../../../assets/Travis CI.svg";
import DockerIcon from "../../../../assets/Docker.svg";
import KubernetesIcon from "../../../../assets/Kubernetes.svg";
import PortainerIcon from "../../../../assets/Portainer.svg";
import PrometheusIcon from "../../../../assets/Prometheus.svg";
import GrafanaIcon from "../../../../assets/Grafana.svg";
import HashiCorpVaultIcon from "../../../../assets/HashiCorp Vault.svg";
import AwsSecretsManagerIcon from "../../../../assets/Secrets Manager.svg";
import AnsibleTowerIcon from "../../../../assets/Ansible.svg";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";

const categories = [
  {
    name: "INFRASTRUCTURE AS CODE (IAC)",
    tools: [
      { name: "Terraform", icon: TerraformIcon },
      { name: "AWS CDK", icon: AwsCdkIcon },
      { name: "Ansible", icon: AnsibleIcon },
    ],
  },
  {
    name: "CI/CD",
    tools: [
      { name: "Jenkins", icon: JenkinsIcon },
      { name: "GitLab CI/CD", icon: GitLabIcon },
      { name: "CircleCI", icon: CircleCIIcon },
      { name: "Travis CI", icon: TravisCIIcon },
    ],
  },
  {
    name: "CONTAINERIZATION",
    tools: [
      { name: "Docker", icon: DockerIcon },
      { name: "Kubernetes", icon: KubernetesIcon },
      { name: "Portainer", icon: PortainerIcon },
    ],
  },
  {
    name: "MONITORING AND OBSERVABILITY",
    tools: [
      { name: "Prometheus", icon: PrometheusIcon },
      { name: "Grafana", icon: GrafanaIcon },
    ],
  },
  {
    name: "SECRET MANAGEMENT",
    tools: [
      { name: "HashiCorp Vault", icon: HashiCorpVaultIcon },
      { name: "AWS Secrets Manager", icon: AwsSecretsManagerIcon },
    ],
  },
  {
    name: "DEVOPS AUTOMATION PLATFORM",
    tools: [{ name: "Ansible Tower", icon: AnsibleTowerIcon }],
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

function TechStack() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <WrapperContainer>
      <div className=" mx-auto px-6">
        <Heading>Tech Stack</Heading>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 space-y-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                whileHover={{ x: 10, scale: 1.05 }}
                onClick={() => setActiveCategory(index)}
                className={`p-6 rounded-lg cursor-pointer transition-all transform ${
                  index === activeCategory
                    ? "bg-white shadow-lg border-l-4 border-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                <h3
                  className={`text-lg font-semibold ${
                    index === activeCategory ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {category.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="col-span-8"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            <div className="grid grid-cols-3 gap-8">
              {categories[activeCategory].tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center p-6 rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all transform"
                >
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <img
                      src={tool.icon}
                      alt={`${tool.name} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </WrapperContainer>
  );
}

export default TechStack;
