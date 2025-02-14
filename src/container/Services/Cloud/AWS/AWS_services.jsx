import React from "react";
import { Server, Database, Cloud, ShieldCheck, Cpu, Bot } from "lucide-react";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

const useCases = [
    { 
        title: "Compute (EC2, Lambda, ECS, EKS)", 
        description: "AWS Compute services provide on-demand, scalable computing power for applications of all sizes. EC2 offers virtual servers, Lambda enables serverless computing, ECS manages containers, and EKS is a managed Kubernetes service. These services help businesses deploy, manage, and scale their applications efficiently.", 
        icon: <Cpu size={48} className="text-blue-500" />
    },
    { 
        title: "Storage (S3, EBS, Glacier)", 
        description: "AWS provides flexible and secure storage solutions. S3 offers highly scalable object storage, EBS provides block storage for EC2 instances, and Glacier enables long-term archival storage with cost efficiency. These services ensure high availability, data durability, and seamless integration with AWS workloads.", 
        icon: <Cloud size={48} className="text-yellow-500" />
    },
    { 
        title: "Databases (RDS, DynamoDB, Aurora)", 
        description: "AWS offers managed database services for various use cases. RDS supports relational databases like MySQL and PostgreSQL, DynamoDB is a fully managed NoSQL database, and Aurora delivers high-performance, cloud-native relational database solutions. These services enhance scalability, security, and reliability.", 
        icon: <Database size={48} className="text-green-500" />
    },
    { 
        title: "Networking (VPC, CloudFront, Route 53)", 
        description: "AWS networking services enable secure and reliable communication between resources. VPC provides isolated cloud environments, CloudFront accelerates content delivery via a global CDN, and Route 53 manages domain name resolution with high availability. These services enhance network performance and security.", 
        icon: <Server size={48} className="text-purple-500" />
    },
    { 
        title: "Security & Compliance (IAM, Shield, WAF)", 
        description: "AWS ensures robust security with identity management, threat protection, and compliance monitoring. IAM manages access control, Shield protects against DDoS attacks, and WAF defends against web threats. These services help businesses maintain secure and compliant cloud environments.", 
        icon: <ShieldCheck size={48} className="text-red-500" />
    },
    { 
        title: "AI & Machine Learning (SageMaker, Rekognition)", 
        description: "AWS AI/ML services enable businesses to build and deploy intelligent applications. SageMaker simplifies machine learning model training, while Rekognition offers powerful image and video analysis. These services drive automation, enhance user experiences, and provide actionable insights.", 
        icon: <Bot size={48} className="text-indigo-500" />
    }
];
const AWS_services = () => {

    return (
        <>
        <WrapperContainer>
            <div className="bg-gray-100 p-10 rounded-xl ">
            <Heading>
                <h1>AWS Services</h1>
                </Heading>
                <Paragraph>
                <p className=" text-center max-w-3xl mx-auto">
                    AWS (Amazon Web Services) is a leading cloud computing platform offering scalable solutions like computing, storage, databases, and networking. Key services include Amazon EC2 for virtual servers, S3 for storage, and RDS for databases. AWS also provides AI, security, and serverless computing with AWS Lambda, making it a top choice for businesses of all sizes.
                </p>
                </Paragraph>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-8">
                    {useCases.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all transform hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h2 className="text-xl font-semibold text-[#1A2E6F]">{item.title}</h2>
                            <p className="text-gray-600 mt-2">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            </WrapperContainer>
        </>
    );
};

export default AWS_services;
