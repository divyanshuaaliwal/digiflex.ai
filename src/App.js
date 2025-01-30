import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Contact from './components/Contact';
import Footer from "./components/Footer";
import Header from './components/Header';
import Navigation from './components/Navigation';
import Reviews from './components/Reviews';

import SoftwareTestManagement from './pages/SoftwareTestManagement';
import TestAutomation from './pages/TestAutomation';
import PerformanceTesting from './pages/PerformanceTesting';
import SecurityTesting from './pages/SecurityTesting';
import SeleniumAutomationTesting from './pages/SeleniumAutomationTesting';

function App() {
	const location = useLocation();

	useEffect(() => {
		// This will run on every route change
		console.log("Route changed to:", location.pathname);

		// Example: Scroll to top on route change             
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<div className="bg-white w-full">
			
			<Header />	
               
			<Routes>
				<Route path='/' element={<SoftwareTestManagement />} />
				<Route path="/services/testing/software-test-management" element={<SoftwareTestManagement />} />
				<Route path="/services/testing/test-automation" element={<TestAutomation />} />
				<Route path="/services/testing/performance-testing" element={<PerformanceTesting />} />
				<Route path='/services/testing/security-testing' element={<SecurityTesting />} />
				<Route path='/services/testing/selenium-automation-testing' element={<SeleniumAutomationTesting />} />
			</Routes>

			<Reviews />
			<Contact />
			<Navigation />
			<Footer />
		</div>
	);
}

export default App;
