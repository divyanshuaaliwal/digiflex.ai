import React from 'react'

import HeroSection from "../Security Testing Services Components/HeroSection"
import CyberDefenseSection from '../Security Testing Services Components/CyberDefenseSection';
import SecurityOperations from '../Security Testing Services Components/SecurityOperations';
import DigitalTransformation from '../Security Testing Services Components/DigitalTransformation';
import WebAppPenetrationTesting from '../Security Testing Services Components/WebAppPenetrationTesting';
import WebAppPenetrationTestingProcess from '../Security Testing Services Components/WebAppPenetrationTestingProcess';
import SecurityApproach from '../Security Testing Services Components/SecurityApproach';

const SecurityTestingServices = () => {
  return (
    <div>
        <HeroSection/>
        <CyberDefenseSection/>
        <SecurityOperations/>
        <DigitalTransformation/>
        <WebAppPenetrationTesting/>
        <WebAppPenetrationTestingProcess/>
        <SecurityApproach/>
    </div>
  )
}

export default SecurityTestingServices