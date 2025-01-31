import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import CemDevlopment from './pages/Cem-devlopment';
import IntregrationandMigration from './pages/Intregration-and-Migration';
import BlockChainDevlopment from './pages/BlockChainDevlopment'
import SaasDeclopment from './pages/Saas-Devlopment';
import WebsiteDevlopment from './pages/WebsiteDevlopment';
import MobileAppDevlopment from './pages/Mobile-App-Devlopment';
import WebApplicationDevlopment from './pages/WebApplicationDevlopment';
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

        <Route path="/services/custom-apps/intregration" element={<IntregrationandMigration/>} />
        <Route path="/services/custom-apps/cem-devlopment" element={<CemDevlopment/>} />
        <Route path="/services/custom-apps/saas" element={<SaasDeclopment/>} />
        <Route path="/services/custom-apps/desktop" element={<WebsiteDevlopment/>} />
        <Route path="/services/custom-apps/block-chain" element={<BlockChainDevlopment/>} />
        <Route path="/services/custom-apps/mobile" element={<MobileAppDevlopment/>} />
        <Route path="/services/custom-apps/web" element={<MobileAppDevlopment/>} />

        <Route path="/services/consulting/mobile-consulting" element={<MobileConsulting />} />
        <Route path="/services/consulting/web-consulting" element={<WebConsulting />} />
        <Route path="/services/consulting/salesforce-consulting" element={<SalesforceConsulting />} />
        <Route path="/services/consulting/devops-consulting" element={<DevopsConsulting />} />
        <Route path="/services/consulting/testing-consulting" element={<TestingConsulting />} />
        <Route path="/services/consulting/ai-consulting" element={<AiConsulting />} />

            
        </Routes>

      <Reviews />
      <Contact />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
