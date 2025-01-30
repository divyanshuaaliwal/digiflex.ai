import React from 'react';
import { motion } from 'framer-motion';

const HeroPageForAll = ({title, description, image}) => {
    return (
        <div className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white w-full min-h-screen px-4 py-12 mx-auto">

            <div className="w-11/12 mx-auto flex flex-col space-y-36 px-4 py-12">

                {/* Hero Content */}

                <motion.div className='flex justify-center items-center'>

                    <motion.div className='flex flex-col md:flex-row justify-between items-center'>

                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="px-8 w-[65%]"
                        >
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2 }}
                                className="text-4xl md:text-7xl font-bold leading-tight mb-8"
                            >
                                {title}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5 }}
                                className="text-xl text-white mb-6 mx-auto"
                            >
                                {description}
                            </motion.p>
                            
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="overflow-hidden width-1/2"
                        >
                            <img src={image} width={"550px"} alt="Company Logo" loading="lazy" className="rounded-md shadow-lg" />
                        </motion.div>

                    </motion.div>
                    
                </motion.div>
                
                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="flex justify-between items-center"
                >
                    <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                        <p className="text-2xl font-bold">15x</p>
                        <p className="text-white">AVG ROI</p>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                        <p className="text-2xl font-bold">200,100</p>
                        <p className="text-white">Participants</p>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                        <p className="text-2xl font-bold">$1 billion+</p>
                        <p className="text-white">Total Assets Connected</p>
                    </motion.div>
                    
                </motion.div>
        
            </div>

        </div>
    );
};

export default HeroPageForAll;
