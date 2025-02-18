import React from "react";
import Azure_computer from '../../../../assets/Azore_Computer.png';
import Azure_storage from '../../../../assets/Azore_storage.webp'
import Azure_network from "../../../../assets/Azore_network.png";
import Azure_learning from '../../../../assets/Azore_learning.jpg';
import Azure_security from '../../../../assets/Azore_security.png'
import Heading from "../../../../Layout/Heading";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Subheading from "../../../../Layout/Subheading";

const services = [
  {
    icon: Azure_computer,
    title: "Compute Services",
    brief: "Virtual Machines (VMs), App Services, AKS",
    details: "Azure provides scalable compute resources with Virtual Machines, Kubernetes, and App Services for hosting .",
  },
  {
    icon: Azure_storage,
    title: "Storage Services",
    brief: "Blob Storage, Azure Files, Data Lake",
    details: "Reliable cloud storage solutions including Blob Storage for unstructured data, Azure Files for file storage, and Data Lake for big data analytics.",
  },
  {
    icon: Azure_network,
    title: "Networking",
    brief: "Virtual Networks (VNet), Load Balancers, ExpressRoute",
    details: "Connect and secure cloud applications using Azure Virtual Networks, Load Balancers for traffic management, and ExpressRoute for private connections.",
  },
  {
    icon: Azure_storage,
    title: "Database Services",
    brief: "Azure SQL Database, Cosmos DB, PostgreSQL, MySQL",
    details: "Fully managed database services supporting SQL and NoSQL options like Cosmos DB, PostgreSQL, MySQL, and scalable Azure SQL Database.",
  },
  {
    icon: Azure_learning,
    title: "AI & Machine Learning",
    brief: "Cognitive Services, Azure Machine Learning",
    details: "Enhance applications with AI capabilities using Cognitive Services for vision, speech, and language processing, and Azure ML for model training.",
  },
  {
    icon: Azure_security,
    title: "Security & Identity",
    brief: "Azure Active Directory (AAD), Key Vault, Security Center",
    details: "Secure access and identity management with Azure AD, store secrets safely in Key Vault, and protect resources using Security Center.",
  },
];
function Azure_feature() {

  return (
    <>
    <WrapperContainer>
    <Heading>
      <div>
        <h1>Key Features of Azure</h1>
      </div>
      </Heading>
      <div className="ml-20 mr-20 mt-[40px] flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative border border-gray-300 p-5 rounded-xl shadow-md transition-all duration-300 hover:bg-blue-500 hover:text-white cursor-pointer overflow-hidden"
            >
              <div className="w-16 h-16 mx-auto mb-2">
                <img src={service.icon} alt="icon" className="w-full h-full" />
              </div>
              
              <div className="text-center">
              <Subheading>
                <h2 className="text-xl font-bold">{service.title}</h2>
                </Subheading>
                <p className="text-gray-700 group-hover:text-white">{service.brief}</p>
              </div>

              {/* Detailed Information (Appears on Hover) */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-blue-500 text-white p-5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                {/* Logo stays visible in hover state */}
                <div className="w-16 h-16 mb-2">
                  <img src={service.icon} alt="icon" className="w-full h-full" />
                </div>
                <p>{service.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </WrapperContainer>
    </>
  );
}

export default Azure_feature;
