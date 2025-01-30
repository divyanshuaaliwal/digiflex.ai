import React from 'react';


import PerformanceTestingHero from "../Performance Testing Components/PerformanceTestingHero"
import PerformanceTestingSection from '../Performance Testing Components/PerformanceTestingSection';
import Services from '../Performance Testing Components/Services';
import PerformanceTestingDiagram from "../Performance Testing Components/PerformanceTestingDiagram";
import TestingTools from '../Performance Testing Components/TestingTools';
import BusinessSolutions from "../Performance Testing Components/BusinessSolutions"
import PerformanceChallenges from "../Performance Testing Components/PerformanceChallenges"


const PerformanceTesting = () => {
    return (
        <div>
            <PerformanceTestingHero/>
			<PerformanceTestingSection/>
			<Services/>
			<PerformanceTestingDiagram/>
			<TestingTools/>
			<BusinessSolutions/>
			<PerformanceChallenges/>
        </div>
    )
}

export default PerformanceTesting