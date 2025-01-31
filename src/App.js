import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from './pages/Hero';
import Mobile from './pages/Mobile';
import Saas from './pages/Saas';
import Website from './pages/Website';
import Application from './pages/Application';
import Amp from './pages/Amp';
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Reviews from "./components/Reviews";
import SoftwareTestManagement from "./pages/SoftwareTestManagement";
import TestAutomation from "./pages/TestAutomation";
import PerformanceTesting from "./pages/PerformanceTesting";
import SecurityTesting from "./pages/SecurityTesting";
import SeleniumAutomationTesting from "./pages/SeleniumAutomationTesting";

import WebConsulting from './pages/WebConsulting';
import MobileConsulting from './pages/MobileConsulting'
import SalesforceConsulting from './pages/SalesforceConsulting';
import DevopsConsulting from './pages/DevopsConsulting';
import TestingConsulting from './pages/TestingConsulting';
import AiConsulting from './pages/AiConsulting';

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
        <Route path="/" element={<SoftwareTestManagement />} />

        <Route path="/services/testing/software-test-management" element={<SoftwareTestManagement />}/>
        <Route path="/services/testing/test-automation" element={<TestAutomation />}/>
        <Route path="/services/testing/performance-testing" element={<PerformanceTesting />}/>
        <Route path="/services/testing/security-testing" element={<SecurityTesting />}/>
        <Route path="/services/testing/selenium-automation-testing" element={<SeleniumAutomationTesting />}/>

        
        <Route path="/intregration" element={<Mobile/>} />
        <Route path="/cem-devlopment" element={<Hero/>} />
        <Route path="/services/apps/saas" element={<Saas/>} />
        <Route path="/services/apps/desktop" element={<Website/>} />
        <Route path="/services/apps/mobile" element={<Application/>} />
        <Route path="/services/apps/web" element={<Amp/>} />

        <Route path="/" element={<WebConsulting />} />
        <Route path="/mobile-consulting" element={<MobileConsulting />} />
        <Route path="/web-consulting" element={<WebConsulting />} />
        <Route path="/salesforce-consulting" element={<SalesforceConsulting />} />
        <Route path="/devops-consulting" element={<DevopsConsulting />} />
        <Route path="/testing-consulting" element={<TestingConsulting />} />
        <Route path="/ai-consulting" element={<AiConsulting />} />

            
        </Routes>

      <Reviews />
      <Contact />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
