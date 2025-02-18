import React from 'react';
import WrapperContainer from '../../../../Layout/WrapperContainer'
import Paragraph from '../../../../Layout/Paragraph'
import Heading from '../../../../Layout/Heading'

function Aws_intro() {
    const useCases = [
        { 
            title: "Big Data & Analytics ", 
            description: "Real-time data processing using AWS services.", 
            extra: "AWS offers scalable storage, data lakes, and powerful analytics with services like Redshift, Athena, and EMR."
        },
        { 
            title: "AI & Machine Learning", 
            description: "Training and deploying ML models.", 
            extra: "AWS provides AI/ML services such as SageMaker, Rekognition, Polly, and Lex for advanced automation."
        },
        { 
            title: "IoT (Internet of Things)", 
            description: "Managing and analyzing IoT devices.", 
            extra: "AWS IoT Core enables secure connection and management of billions of IoT devices globally."
        },
        { 
            title: "Web Hosting", 
            description: "Hosting websites and applications with auto-scaling.", 
            extra: "AWS supports hosting with EC2, S3, CloudFront, and Route 53 for seamless global delivery."
        },
        { 
            title: "Enterprise Applications", 
            description: "SAP, Microsoft, and other enterprise workloads.", 
            extra: "AWS enables running business-critical applications with high performance, scalability, and security."
        },
        { 
            title: "Gaming", 
            description: "Scalable backend infrastructure for multiplayer games.", 
            extra: "AWS GameLift and other services offer high-speed, low-latency game server hosting."
        }
    ];

    return (
        <>
        <div className='flex flex-col items-center justify-center'>
            <WrapperContainer>
            {/* AWS Introduction Section */}
            <div className=" text-center">
            <Heading>
                <h1>About AWS Cloud Services</h1>
                </Heading>
                <Paragraph>
                <div>
                    AWS Cloud (Amazon Web Services Cloud) is the world's leading cloud computing platform, providing a vast set of services such as computing, storage, databases, networking, security, AI, and analytics. 
                    It enables businesses, developers, and enterprises to build, deploy, and manage applications on a global scale with high reliability, security, and cost efficiency.
                </div>
                </Paragraph>
            </div>

            {/* AWS Use Cases Section */}
            <div className=" flex items-center justify-center mt-[30px] ">
                <div className="">
                    <div className="grid grid-cols-3 gap-6">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="shadow-lg border border-gray-300 ">
                                {/* Header */}
                                <div className="bg-blue-900 text-white font-bold p-4 text-center">{useCase.title}</div>
                                
                                {/* Content */}
                                <div className="p-2">
                                    <p className="text-gray-700 font-semibold">{useCase.description}</p>
                                    <p className="text-gray-600 text-sm mt-2">{useCase.extra}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </WrapperContainer>
        </div>
        </>
    );
}

export default Aws_intro;
