import React from "react";
import { motion } from "framer-motion";
import {FEATURE_ITEMS } from "./constants";
import {Timeline} from "./Timeline";
import {StandOut} from "./StandOut";
import { BentoGrid, BentoGridItem } from "../../../components/ui/Bento-grid";
import { WhatWeOffer } from './WhatWeOffer';
import  {KeyFeatures } from './KeyFeatures';
import Introduction from './Intro';
import Expertie from './Experties';
import CaseStudies from './CaseStudy';
import IndustriesCarousel from "./Industries";
import OurWork from "./OurWork";
import TeamSection from "./OurTeam";
import Recognitions from "./Recognition";
import WrapperContainer from '../../../Layout/WrapperContainer'

const MotionBentoGridItem = motion(BentoGridItem);

const BentoGridFeatures = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
    {/*Introduction*/}
    <Introduction/>

    {/*Why us*/}
    <WrapperContainer>
    <section className=" bg-gradient-to-tr from-blue-50 via-white to-blue-50">
      <motion.header 
        {...fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Why <span className="text-blue-600">Us?</span>
        </h2>
        <p className="text-lg text-gray-600">
          Think Smart. Think AI. Think Digiflex.ai.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <BentoGrid>
          {FEATURE_ITEMS.map((item, index) => (
            <MotionBentoGridItem
              key={index}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            />
          ))}
        </BentoGrid>
      </motion.div>

      <motion.footer 
        {...fadeInUp}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center mt-12"
      >
        <p className="text-lg font-semibold text-gray-900">
          Partner with us for innovation and excellence!
        </p>
      </motion.footer>
    </section>
    </WrapperContainer>


    {/*What we offer*/}
    <WhatWeOffer/>

    {/*Our Process section*/}
    <Timeline/>

    {/*Our KeyFeatures*/}
    <KeyFeatures/>

    {/*What Makes Us Stand out*/}
    <StandOut/>

    {/*Industries*/}
    <IndustriesCarousel/>

    {/*Our Exoerties*/}
    <Expertie/>
    
    {/*Our Work*/}
    <OurWork/>

    {/*CaseStudy*/}
    <CaseStudies/>

    {/*Our Team*/}
    <TeamSection/>

    {/*Recognition*/}
    <Recognitions/>

  </>

  );
};

export default BentoGridFeatures;