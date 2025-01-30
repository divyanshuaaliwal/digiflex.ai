import React from 'react'

import BusinessAIHeader from "../Selenium Automation Testing/BusinessAIHeader"
import SeleniumAutomationHeroSection from '../Selenium Automation Testing/SeleniumAutomationHeroSection'
import OutcomesSection from '../Selenium Automation Testing/OutcomesSection'
import SeleniumServices from '../Selenium Automation Testing/SeleniumServices'
import SpeedBenefits from '../Selenium Automation Testing/SpeedBenefits'
import ProductShowcase from '../Selenium Automation Testing/ProductShowcase'
import IntegrationShowcase from '../Selenium Automation Testing/IntegrationShowcase'
import RealAutomation from '../Selenium Automation Testing/RealAutomation'

const SeleniumAutomationTesting = () => {
    return (
        <div>
            <SeleniumAutomationHeroSection/>
            <BusinessAIHeader/>
            <RealAutomation/>
            <OutcomesSection/>
            <SeleniumServices/>
            <SpeedBenefits/>
            <ProductShowcase/>
            <IntegrationShowcase/>
        </div>
    )
}

export default SeleniumAutomationTesting
