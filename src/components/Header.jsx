import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, Menu,
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  Cpu, 
  Trello,
  Blocks , 
  Cloud,
  Code,
  Server,
  LineChart,
  Rocket,
  ShoppingBag,
  Clock,
} from 'lucide-react';
import logo from "../assets/digiflex.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [activeService, setActiveService] = useState('web');
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const timeoutRef = useRef(null);

    const navItems = [
      { label: 'Home', href: '#' },
      { 
        label: 'Services', 
        href: '#',
        hasDropdown: true 
      },
      { label: 'Industries', href: '#' },
      { label: 'Clients', href: '#' },
      { label: 'Insights', href: '#' },
      { label: 'Approach', href: '#' },
      { label: 'About us', href: '#' },
    ];

    const services = [
        { 
          id: 'Consulting', 
          icon: Globe, 
          title: 'Consulting',
          color: 'text-pink-500',
          description: 'Modern web applications built with React, Next.js, and other cutting-edge technologies.',
          features: [
            { icon: Code, title: 'Mobile & Web App Consulting', path: '/services/consulting/mobile-consulting' },
            { icon: Server, title: 'Website Consulting', path: '/services/consulting/web-consulting' },
            { icon: Globe, title: 'Salesforce Consulting', path: '/services/consulting/salesforce-consulting' },
            { icon: ShoppingBag, title: 'DevOps Consulting', path: '/services/consulting/devops-consulting' },
            { icon: LineChart, title: 'Testing Consulting', path: '/services/consulting/testing-consulting' },
            { icon: Clock, title: 'AI Consulting', path: '/services/consulting/ai-consulting' },
          ],
          image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=600&q=80'
        },
        { 
          id: 'UI/UX', 
          icon: Smartphone, 
          title: 'UI/UX',
          color: 'text-blue-500',
          description: 'Native and cross-platform mobile applications for iOS and Android.',
          features: [
            { icon:  Trello, title: 'Brand Strategy', path: '/services/ui-ux/BrandStrategy' },
            { icon: Smartphone, title: 'Design Consulting', path: '/services/ui-ux/designconsulting' },
            { icon: Blocks , title: 'Product Design', path: '/services/ui-ux/productdesign' },
            { icon: Rocket, title: 'UX Research', path: '/services/ui-ux/uxresearch' },
            { icon: Code, title: 'UI & Animation', path: '/services/ui-ux/uianimation' },
            { icon: Cloud, title: 'Design Testing', path: '/services/ui-ux/design-testing' },
          ],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
        },
        { 
          id: 'Apps', 
          icon: ShoppingCart, 
          title: 'Custom Apps',
          color: 'text-green-500',
          description: 'Full-featured e-commerce solutions with secure payment processing.',
          features: [
            { icon: ShoppingCart, title: 'Mobile App Development', path: '/services/custom-apps/MobileAppDevlopment' },
            { icon: Database, title: 'Web Application Development', path: '/services/custom-apps/webApplicationDevlopment' },
            { icon: ShoppingBag, title: 'Website Development', path: '/services/custom-apps/WebsiteDevlopment' },
            { icon: LineChart, title: 'SaaS Development', path: '/services/custom-apps/SaasDevlopment' },
            { icon: Globe, title: 'Blockchain Development', path: '/services/custom-apps/block-chain' },
            { icon: Server, title: 'Integration and Migration', path: '/services/custom-apps/IntregrationandMigration' },
            { icon: Server, title: 'CEM Development', path: '/services/custom-apps/cem-devlopment' }
          ],
          image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80'
        },
        { 
          id: 'QA', 
          icon: Cpu, 
          title: 'Testing & QA',
          color: 'text-yellow-500',
          description: 'Cutting-edge solutions using AI, ML, and blockchain technologies.',
          features: [
            { icon: Cpu, title: 'Software Test Management', path: '/services/testing/software-test-management' },
            { icon: Database, title: 'Test Automation', path: '/services/testing/test-automation' },
            { icon: Code, title: 'Performance Testing', path: '/services/testing/performance-testing' },
            { icon: Server, title: 'Security Testing Services', path: '/services/testing/security-testing' },
            { icon: Globe, title: 'Selenium Automation Testing', path: '/services/testing/selenium-automation-testing' }
          ],
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
        },
        
      ];
      
  
    const activeServiceData = services.find(s => s.id === activeService) || services[0];

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setShowServices(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setShowServices(false);
        }, 300);
    };

    const handleFeatureClick = () => {
        setShowServices(false);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <nav className="sticky top-0 z-50 w-full bg-blue-950 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="/" className="flex items-center no-underline">
                        <img src={logo} alt="logo" className="h-6" />
                    </a>

                    {!isSearchActive ? (
                        <>
                            {/* Desktop Navigation Items */}
                            <div className="hidden md:flex items-center space-x-8">
                                {navItems.map((item) => (
                                    <div 
                                        key={item.label} 
                                        className="relative group"
                                    >
                                        <div 
                                            className="flex items-center space-x-1 cursor-pointer"
                                            onMouseEnter={item.hasDropdown ? handleMouseEnter : undefined}
                                            onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
                                        >
                                            <a
                                                href={item.href}
                                                className="text-white hover:text-gray-300 transition-colors text-sm"
                                            >
                                                {item.label}
                                            </a>
                                            {item.hasDropdown && (
                                                <div className="h-4 w-4 ml-1" />
                                            )}
                                        </div>

                                        {item.hasDropdown && showServices && (
                                            <div 
                                                className="absolute w-[75vw] -left-80 top-8 mt-3 max-w-7xl bg-white shadow-xl rounded-lg overflow-hidden z-60"
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <div className="grid grid-cols-12 p-8">
                                                    {/* Services List */}
                                                    <div className="col-span-3 bg-gray-50 rounded-lg p-4">
                                                        <h3 className="text-lg font-semibold mb-4 text-gray-900">Our Services</h3>
                                                        <div className="space-y-2">
                                                            {services.map((service) => (
                                                                <button
                                                                    key={service.id}
                                                                    className={`flex items-center w-full gap-3 p-2 rounded-lg hover:bg-white transition-colors duration-200 ${
                                                                        service.id === activeService ? 'bg-white shadow-sm' : ''
                                                                    }`}
                                                                    onMouseEnter={() => setActiveService(service.id)}
                                                                >
                                                                    <service.icon className={`h-5 w-5 ${service.color}`} />
                                                                    <span className="text-sm font-medium text-gray-700">{service.title}</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Active Service Details */}
                                                    <div className="col-span-9 p-4">
                                                        <div className="grid grid-cols-2 gap-8">
                                                            <div>
                                                                <h3 className="text-xl font-bold text-gray-900 mb-4">{activeServiceData.title}</h3>
                                                                <p className="text-gray-600 mb-6">{activeServiceData.description}</p>
                                                                <div className="grid grid-cols-2 gap-4">
                                                                {activeServiceData.features.map((feature, index) => (
                    <Link 
                        key={index} 
                        to={feature.path}
                        className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                        onClick={handleFeatureClick}
                    >
                        <feature.icon className={`h-5 w-5 ${activeServiceData.color}`} />
                        <span>{feature.title}</span>
                    </Link>
                ))}

                                                                </div>
                                                            </div>
                                                            <div className="rounded-lg overflow-hidden">
                                                                <img
                                                                    src={activeServiceData.image}
                                                                    alt={activeServiceData.title}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Right side items */}
                            <div className="hidden md:flex items-center space-x-6">
                                <button
                                    onClick={() => setIsSearchActive(true)}
                                    className="text-white hover:text-gray-300"
                                >
                                    <Search className="h-5 w-5" />
                                </button>
                                <a
                                    href="#"
                                    className="border border-blue-600 text-blue-600 px-6 py-2 hover:bg-blue-500 hover:text-white transition-colors text-sm"
                                >
                                    CONTACT US
                                </a>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden flex items-center">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="text-white hover:text-gray-300"
                                >
                                    <Menu className="h-6 w-6" />
                                </button>
                            </div>
                        </>
                    ) : (
                        // Search bar view
                        <div className="flex-1 flex items-center ml-8">
                            <Search className="h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="e.g. Business Intelligence"
                                className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 ml-4"
                                autoFocus
                            />
                            <button className="bg-[#6B7CFF] px-6 py-2 text-sm mr-4 hover:bg-[#5A6AE6] transition-colors">
                                SEARCH
                            </button>
                            <button
                                onClick={() => setIsSearchActive(false)}
                                className="text-white hover:text-gray-300"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-700">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-white hover:text-gray-300 transition-colors text-sm"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a
                                href="#"
                                className="border border-[#98CA3F] text-[#98CA3F] px-6 py-2 hover:bg-[#98CA3F] hover:text-white transition-colors text-sm text-center"
                            >
                                CONTACT US
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
