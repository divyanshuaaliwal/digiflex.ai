import React from "react";
import { motion } from "framer-motion";
import MethodologySection from "./MethodologySection";
import TypesAndExampleSection from "./TypesAndExampleSection";
import TechnologiesSection from "./TechnologiesSection";
import IndustriesSection from "./IndustriesSection";
import { BenefitsSection } from "./BenefitsSection";
import WrapperContainer from "../../../../Layout/WrapperContainer";
import Heading from "../../../../Layout/Heading";
import Paragraph from "../../../../Layout/Paragraph";

function Body() {
  return (
    <div className="min-h-screen">
      <WrapperContainer>
        <Heading>Why do you need website consulting?</Heading>
        <Paragraph>
          There are several benefits of website consulting services, including:
        </Paragraph>
      </WrapperContainer>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Methodology Section */}
      <MethodologySection />

      {/* Types and Example Section */}
      <TypesAndExampleSection />

      {/* Technologies Section */}
      <TechnologiesSection />

      {/* Industries Section */}
      <IndustriesSection />
    </div>
  );
}

export default Body;
