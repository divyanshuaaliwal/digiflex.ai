import React from 'react'

import TestAutomationHeroSection from '../Test Automation Components/TestAutomationHeroSection';
import Body from '../Test Automation Components/Body';
import TestAutomationFeatures from '../Test Automation Components/TestAutomationFeatures';
import ImprovementSection from '../Test Automation Components/ImprovementSection';
import AutomationServices from '../Test Automation Components/AutomationServices';
import ContentSlider from '../Test Automation Components/ContentSlider';
import TestingCapabilities from '../Test Automation Components/TestingCapabilities';

const TestAutomation = () => {
    return (
        <div>
            <TestAutomationHeroSection/>
			<Body/>
			<TestAutomationFeatures/>
			<ImprovementSection/>
			<AutomationServices/>
			<ContentSlider/>
			<TestingCapabilities/>
        </div>
    )
}

export default TestAutomation