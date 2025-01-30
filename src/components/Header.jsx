import { useState } from 'react';
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';

function Header() {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
      
        <header className="sticky top-0 w-full bg-[#172554] flex items-center justify-between z-50">
           
            <a href="/" className="flex items-center no-underline">
                <img src={logo} alt="logo" className='h-6' />
            </a>
            
            {/* Mobile menu button */}
            <button className="md:hidden text-white p-2"
                onClick={ () => setIsMenuOpen(!isMenuOpen)}
            >
                <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    {
                        isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )
                    }
                </svg>

            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-4">
                {/* Services Dropdown */}
                <div className="relative group">
                    <a href="/" className="text-white px-6 hover:text-gray-300 transition-colors flex items-center gap-2">
                        Company Services
                        <svg className="w-4 h-4 mt-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>

                    <div className="absolute -left-full top-full mt-6 w-[200px] bg-[#0a0a0a] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        {/* Consulting */}
                        <div className="relative group/consulting p-3 hover:bg-gray-800">
                            <div className="flex items-center justify-between text-white">
                            <span className="font-semibold">Consulting</span>
                            <svg className="w-4 h-4 transition-transform group-hover/consulting:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            </div>
                            <div className="absolute left-full top-0 ml-1 w-[200px] bg-[#0a0a0a] rounded-md shadow-lg opacity-0 invisible group-hover/consulting:opacity-100 group-hover/consulting:visible transition-all duration-300">
                            <div className="py-2">
                                <a href="/services/consulting/strategy" className="block px-4 py-2 text-white hover:bg-gray-800">MOBILE & WEB APP CONSULTING</a>
                                <a href="/services/consulting/digital" className="block px-4 py-2 text-white hover:bg-gray-800">WEBSITE CONSULTING</a>
                                <a href="/services/consulting/technology" className="block px-4 py-2 text-white hover:bg-gray-800">SALESFORCE CONSULTING</a>
                                <a href="/services/consulting/process" className="block px-4 py-2 text-white hover:bg-gray-800">COMPANY DEVOPS CONSULTING</a>
                                <a href="/services/consulting/innovation" className="block px-4 py-2 text-white hover:bg-gray-800">TESTING CONSULTING </a>
                                <a href="/services/consulting/transformation" className="block px-4 py-2 text-white hover:bg-gray-800">AI CONSULTING</a>
                            </div>
                            </div>
                        </div>

                        {/* UI/UX */}
                        <div className="relative group/uiux p-3 hover:bg-gray-800">
                            <div className="flex items-center justify-between text-white">
                                <span className="font-semibold">UI/UX</span>
                                <svg className="w-4 h-4 transition-transform group-hover/uiux:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className="absolute left-full top-0 ml-1 w-[200px] bg-[#0a0a0a] rounded-md shadow-lg opacity-0 invisible group-hover/uiux:opacity-100 group-hover/uiux:visible transition-all duration-300">
                                <div className="py-2">
                                    <a href="/services/uiux/user-research" className="block px-4 py-2 text-white hover:bg-gray-800">BRAND STRATEGY</a>
                                    <a href="/services/uiux/wireframing" className="block px-4 py-2 text-white hover:bg-gray-800">DESIGN CONSULTING</a>
                                    <a href="/services/uiux/prototyping" className="block px-4 py-2 text-white hover:bg-gray-800">PRODUCT DESIGN </a>
                                    <a href="/services/uiux/usability-testing" className="block px-4 py-2 text-white hover:bg-gray-800">UX RESEARCH </a>
                                    <a href="/services/uiux/design-systems" className="block px-4 py-2 text-white hover:bg-gray-800">UI & ANIMATION </a>
                                    <a href="/services/uiux/interaction-design" className="block px-4 py-2 text-white hover:bg-gray-800">DESIGN TESTING</a>
                                </div>
                            </div>
                        </div>

                        {/* Custom Apps */}
                        <div className="relative group/apps p-3 hover:bg-gray-800">
                            <div className="flex items-center justify-between text-white">
                                <span className="font-semibold">Custom Apps</span>
                                <svg className="w-4 h-4 transition-transform group-hover/apps:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className="absolute left-full top-0 ml-1 w-[200px] bg-[#0a0a0a] rounded-md shadow-lg opacity-0 invisible group-hover/apps:opacity-100 group-hover/apps:visible transition-all duration-300">
                                <div className="py-2">
                                    <a href="/services/apps/web" className="block px-4 py-2 text-white hover:bg-gray-800">MOBILE APP DEVELOPMENT</a>
                                    <a href="/services/apps/mobile" className="block px-4 py-2 text-white hover:bg-gray-800">WEB APPLICAITON DEVELOPMENT</a>
                                    <a href="/services/apps/desktop" className="block px-4 py-2 text-white hover:bg-gray-800">WEBSITE DEVELOPMENT </a>
                                    <a href="/services/apps/enterprise" className="block px-4 py-2 text-white hover:bg-gray-800">SAAS DEVELOPMENT </a>
                                    <a href="/services/apps/saas" className="block px-4 py-2 text-white hover:bg-gray-800">BLOCKCHAIN DEVELOPMENT </a>
                                    <a href="/services/apps/integration" className="block px-4 py-2 text-white hover:bg-gray-800">INTEGRATION AND MIGRATION </a>
                                    <a href="/services/apps/integration" className="block px-4 py-2 text-white hover:bg-gray-800">CEM DEVELOPMENT</a>
                                </div>
                            </div>
                        </div>

                        {/* Testing & QA */}
                        <div className="relative group/testing p-3 hover:bg-gray-800">
                            <div className="flex items-center justify-between text-white">
                                <span className="font-semibold">Testing & QA</span>
                                <svg className="w-4 h-4 transition-transform group-hover/testing:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                            <div className="absolute left-full top-0 ml-1 w-[200px] bg-[#0a0a0a] rounded-md shadow-lg opacity-0 invisible group-hover/testing:opacity-100 group-hover/testing:visible transition-all duration-300">
                                <div className="py-2">
                                    <Link to="/services/testing/software-test-management" className="block px-4 py-2 text-white hover:bg-gray-800">SOFTWARE TEST MANAGEMENT</Link>
                                    <Link to="/services/testing/test-automation" className="block px-4 py-2 text-white hover:bg-gray-800">TEST AUTOMATION</Link>
                                    <Link to="/services/testing/performance-testing" className="block px-4 py-2 text-white hover:bg-gray-800">PERFORMANCE TESTING</Link>
                                    <Link to="/services/testing/security-testing" className="block px-4 py-2 text-white hover:bg-gray-800">SECURITY TESTING</Link>
                                    <Link to="/services/testing/selenium-automation-testing" className="block px-4 py-2 text-white hover:bg-gray-800">SELENIUM AUTOMATION TESTING</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other navigation items */}
                <a href="/about" className="text-white hover:text-gray-300 transition-colors">About</a>
                <span className="text-white text-xl cursor-pointer mx-4">🔍</span>
            </nav>

            {/* Mobile Navigation */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-t border-gray-800`}>
                <nav className="flex flex-col px-4 py-2">
                    {/* Services sections for mobile */}
                    <div className="py-3 border-b border-gray-800">
                    <div className="text-white font-bold mb-2">Services</div>
                    <div className="pl-4 space-y-4">
                        {/* Consulting */}
                        <div>
                        <div className="text-instinct-red mb-2">Consulting</div>
                        <div className="pl-4 space-y-2">
                            <a href="/services/consulting/strategy" className="block text-gray-300 hover:text-white">Strategy Consulting</a>
                            <a href="/services/consulting/digital" className="block text-gray-300 hover:text-white">Digital Consulting</a>
                            <a href="/services/consulting/technology" className="block text-gray-300 hover:text-white">Technology Advisory</a>
                            <a href="/services/consulting/process" className="block text-gray-300 hover:text-white">Process Optimization</a>
                            <a href="/services/consulting/innovation" className="block text-gray-300 hover:text-white">Innovation Consulting</a>
                            <a href="/services/consulting/transformation" className="block text-gray-300 hover:text-white">Digital Transformation</a>
                        </div>
                        </div>

                        {/* UI/UX */}
                        <div>
                        <div className="text-instinct-red mb-2">UI/UX</div>
                        <div className="pl-4 space-y-2">
                            <a href="/services/uiux/user-research" className="block text-gray-300 hover:text-white">User Research</a>
                            <a href="/services/uiux/wireframing" className="block text-gray-300 hover:text-white">Wireframing</a>
                            <a href="/services/uiux/prototyping" className="block text-gray-300 hover:text-white">Prototyping</a>
                            <a href="/services/uiux/usability-testing" className="block text-gray-300 hover:text-white">Usability Testing</a>
                            <a href="/services/uiux/design-systems" className="block text-gray-300 hover:text-white">Design Systems</a>
                            <a href="/services/uiux/interaction-design" className="block text-gray-300 hover:text-white">Interaction Design</a>
                        </div>
                        </div>

                        {/* Custom Apps */}
                        <div>
                        <div className="text-instinct-red mb-2">Custom Apps</div>
                        <div className="pl-4 space-y-2">
                            <a href="/services/apps/web" className="block text-gray-300 hover:text-white">Web Applications</a>
                            <a href="/services/apps/mobile" className="block text-gray-300 hover:text-white">Mobile Applications</a>
                            <a href="/services/apps/desktop" className="block text-gray-300 hover:text-white">Desktop Software</a>
                            <a href="/services/apps/enterprise" className="block text-gray-300 hover:text-white">Enterprise Solutions</a>
                            <a href="/services/apps/saas" className="block text-gray-300 hover:text-white">SaaS Products</a>
                            <a href="/services/apps/integration" className="block text-gray-300 hover:text-white">System Integration</a>
                        </div>
                        </div>

                        {/* Testing & QA */}
                        <div>
                        <div className="text-instinct-red mb-2">Testing & QA</div>
                        <div className="pl-4 space-y-2">
                            <a href="/services/testing/automation" className="block text-gray-300 hover:text-white">Test Automation</a>
                            <a href="/services/testing/manual" className="block text-gray-300 hover:text-white">Manual Testing</a>
                            <a href="/services/testing/performance" className="block text-gray-300 hover:text-white">Performance Testing</a>
                            <a href="/services/testing/security" className="block text-gray-300 hover:text-white">Security Testing</a>
                            <a href="/services/testing/mobile" className="block text-gray-300 hover:text-white">Mobile Testing</a>
                            <a href="/services/testing/api" className="block text-gray-300 hover:text-white">API Testing</a>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Other mobile menu items */}
                    <a href="/about" className="block py-3 text-white hover:text-gray-300 border-b border-gray-800">About</a>
                    <a href="/about" className="block py-3 text-white hover:text-gray-300 border-b border-gray-800">Project</a>
                    <div className="flex items-center justify-between py-3">
                    <span className="text-white text-xl cursor-pointer">🔍</span>
                    </div>
                    <button href="/contact" className="block py-3 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md transition-colors">Contact us</button>

                </nav>
            </div>

        </header>
    )
}

export default Header