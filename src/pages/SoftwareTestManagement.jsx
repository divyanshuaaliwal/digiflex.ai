import React from 'react'

import Overview from "../Software Test Management/Overview"
import Hero from '../Software Test Management/HeroSection';
import ScalableAutomation from '../Software Test Management/ScalableAutomation';
import TestManagementSystem from '../Software Test Management/TestManagementSystem';
import Benifits from '../Software Test Management/Benifits';
import BodyData from '../Software Test Management/BodyData';
import AnalystRecognition from '../Software Test Management/AnalystRecognition';
import AccelerateBusiness from '../Software Test Management/AccelerateBusiness';


const SoftwareTestManagement = () => {
  return (
    <div>
        <Hero/>
		<Overview/>
		<ScalableAutomation/>
		<TestManagementSystem/>
		<Benifits/>
		<BodyData/>
		<AnalystRecognition/>
		<AccelerateBusiness/>
    </div>
  )
}

export default SoftwareTestManagement