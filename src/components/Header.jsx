import React, { useState } from 'react';
import { Search, X, Menu } from 'lucide-react';
import logo from "../assets/logo.png"

const Navbar = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
      { label: 'Home', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Industries', href: '#' },
      { label: 'Clients', href: '#' },
      { label: 'Insights', href: '#' },
      { label: 'Approach', href: '#' },
      { label: 'About us', href: '#' },
    ];

    return (
        <nav className="bg-blue-950 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    
                    {/* Logo */}
                    <a href="/" className="flex items-center no-underline">
                        <img src={logo} alt="logo" className="h-6" />
                    </a>

                    {
                        !isSearchActive ? (
                            <>
                                {/* Desktop Navigation Items */}
                                <div className="hidden md:flex items-center space-x-8">
                                    {
                                        navItems.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                className="text-white hover:text-gray-300 transition-colors font-medium"
                                            >
                                                {item.label}
                                            </a>
                                        ))
                                    } 
                                </div>

                                {/* Right side items - Desktop */}
                                <div className="hidden md:flex items-center space-x-6">
                                    <button
                                        onClick={() => setIsSearchActive(true)}
                                        className="text-white hover:text-gray-300"
                                    >
                                        <Search className="h-5 w-5" />
                                    </button>
                                    <a
                                        href="#"
                                        className="border border-[#98CA3F] text-[#98CA3F] px-6 py-2 hover:bg-[#98CA3F] hover:text-white transition-colors text-sm"
                                    >
                                        CONTACT US
                                    </a>
                                </div>

                                {/* Mobile Icons */}
                                <div className="flex md:hidden items-center space-x-4">
                                    <button
                                        onClick={() => setIsSearchActive(true)}
                                        className="text-white hover:text-gray-300"
                                    >
                                        <Search className="h-5 w-5" />
                                    </button>
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
                        )
                    }
                </div>

                {/* Mobile Menu */}
                { 
                    isMobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-700">
                            <div className="flex flex-col space-y-4">
                                {
                                    navItems.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="text-white hover:text-gray-300 transition-colors text-sm"
                                        >
                                            {item.label}
                                        </a>
                                    ))
                                }

                                <a
                                    href="#"
                                    className="border border-[#98CA3F] text-[#98CA3F] px-6 py-2 hover:bg-[#98CA3F] hover:text-white transition-colors text-sm text-center"
                                >
                                    CONTACT US
                                </a>
                            </div>
                        </div>
                    )
                }

            </div>
        </nav>
    );
};

export default Navbar;