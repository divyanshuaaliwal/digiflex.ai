import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero from '../src/container/Services/Custom App/CEM/Hero';
import Mobile from '../src/container/Services/Custom App/Intregation/Mobile';
import Saas from '../src/container/Services/Custom App/Saas/Saas';
import Website from '../src/container/Services/Custom App/Website/Website';
import Application from '../src/container/Services/Custom App/Webapplication/Application';
import Amp from '../src/container/Services/Custom App/MobileApp/Amp';
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
        <Route
          path="/services/testing/software-test-management"
          element={<SoftwareTestManagement />}
        />
        <Route
          path="/services/testing/test-automation"
          element={<TestAutomation />}
        />
        <Route
          path="/services/testing/performance-testing"
          element={<PerformanceTesting />}
        />
        <Route
          path="/services/testing/security-testing"
          element={<SecurityTesting />}
        />
        <Route
          path="/services/testing/selenium-automation-testing"
          element={<SeleniumAutomationTesting />}
        />
      <Route path="/intregration" element={<Mobile/>} />
			<Route path="/cem-devlopment" element={<Hero/>} />
			<Route path="/services/apps/saas" element={<Saas/>} />
			<Route path="/services/apps/desktop" element={<Website/>} />
			<Route path="/services/apps/mobile" element={<Application/>} />
			<Route path="/services/apps/web" element={<Amp/>} />
		 
      </Routes>

      <Reviews />
      <Contact />
      <Navigation />
      <Footer />
    </div>
  );
}

export default App;
