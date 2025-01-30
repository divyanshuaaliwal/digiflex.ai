import react from "react";
import { motion } from 'framer-motion';
// import security from "../images/security.jpg"
import left_logo from "../../../../assets/left-logo.jpeg"

const Overview = () => {
    
    const sections = [
        {
            title: "The OS for QA Teams",
            description: "Digiflex.ai's Quality OS is the only centralized QA platform that empowers you to build, connect, and optimize all your testing processes. Test more efficiently, gain real-time visibility at scale, and strengthen confidence in QA. It’s time to transform your vision of faster, frictionless releases into reality.",
            secondHeading : "Build",
            secondDescription : "Orchestrate your testing in a way that works for your team. With the Quality OS, you can centralize test management and plan to build repeatable, scalable workflows that fit any development pipeline.", 
        }
    ];

    
    const ImageComponent = () => {

        return (
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="overflow-auto w-[30%] flex justify-center items-center"
            >
                <img src={left_logo} alt="Company Logo" loading="lazy" className="rounded-xl shadow-lg" />
            </motion.div>
        )
    }




    const DiamondSection = ({secondHeading, secondDescription }) => {
        return (
            <div className="relative flex flex-row items-start space-x-4 w-full max-w-md">
            
                <div className="relative mt-3">

                    {/* Line */}
                    <div className="absolute left-[0.3rem] top-0 h-full w-[2px] bg-black"></div>

                    <div className="flex flex-col space-y-5">
                        {/* Diamonds */}
                        <div className="w-3 h-3 bg-[#1A2E6F] transform rotate-45"></div>
                        <div className="w-3 h-3 bg-[#1A2E6F] transform rotate-45"></div>
                        <div className="w-3 h-3 bg-[#1A2E6F] transform rotate-45"></div>
                        <div className="w-3 h-3 bg-[#1A2E6F] transform rotate-45"></div>
                        <div className="w-3 h-3 bg-[#1A2E6F] transform rotate-45"></div>
                    </div>
                </div>
        
                {/* Text content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className=""
                >
                    <h2 className="text-3xl text-[#1A2E6F] font-semibold mb-2">{secondHeading}</h2>
                    <p className="text-black text-lg">{secondDescription}</p>
                </motion.div>
            </div>
        );
      };
      
    const ParaComponent = ({title, description, secondHeading, secondDescription}) => {
        
        return (
            
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="px-10 w-[65%]"
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="text-4xl md:text-4xl font-semibold text-[#1A2E6F] leading-tight mb-8"
                >
                   {title}   
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="text-xl text-black mb-6 mx-auto"
                >
                    {description}
                </motion.p>

                <DiamondSection secondHeading={secondHeading} secondDescription={secondDescription}/>

            </motion.div>
        )
    }

    return (

        <div className="relative bg-white min-h-screen w-11/12 mx-auto px-4 py-12 flex flex-col items-center justify-center">

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center"
            >
                {/* Centered Overview */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="text-4xl md:text-5xl font-semibold leading-tight text-center text-[#1A2E6F]"
                >
                    Overview
                </motion.h1>

                {/* Underline */}
                <div className="w-40 h-1 bg-[#64a2e2] mt-2"></div>

            </motion.div>

            {/* Sections */}
    
            
            {
                sections.map((section, index) => (
                    
                    <motion.div 
                        key={index} 
                        className="flex justify-center items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <motion.div className="flex flex-col md:flex-row justify-between items-center p-10">
                            {
                                index % 2 === 0 ? (
                                    <>
                                        <ImageComponent/>
                                        <ParaComponent title={section.title} description={section.description} secondHeading={section.secondHeading} secondDescription={section.secondDescription}/>
                                    </>
                                ) : (
                                    <> 
                                        <ParaComponent title={section.title} description={section.description} secondHeading={section.secondHeading} secondDescription={section.secondDescription}/>
                                        <ImageComponent/>
                                    </>
                                )
                        }

                        </motion.div>
                    </motion.div>
                ))
            }
        </div>

    )
}

export default Overview;