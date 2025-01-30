import React from 'react';


import PerformanceTestingHero from "../container/Services/Testing and QA/Performance Testing/PerformanceTestingHero"
import PerformanceTestingSection from '../container/Services/Testing and QA/Performance Testing/PerformanceTestingSection';
import Services from '../container/Services/Testing and QA/Performance Testing/Services';
import PerformanceTestingDiagram from "../container/Services/Testing and QA/Performance Testing/PerformanceTestingDiagram";
import TestingTools from '../container/Services/Testing and QA/Performance Testing/TestingTools';
import BusinessSolutions from "../container/Services/Testing and QA/Performance Testing/BusinessSolutions"
import PerformanceChallenges from "../container/Services/Testing and QA/Performance Testing/PerformanceChallenges"

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