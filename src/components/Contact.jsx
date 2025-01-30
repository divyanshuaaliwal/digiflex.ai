import React, { useState } from "react";

const ContactForm = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        companySize: "",
        country: "",
        inquiry: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    
    const validate = () => {

        const newErrors = {};
        
        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required.";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is not valid.";
        }

        if (!formData.companyName.trim()) {
            newErrors.companyName = "Company name is required.";
        }

        if (!formData.companySize) {
            newErrors.companySize = "Company size is required.";
        }

        if (!formData.country) {
            newErrors.country = "Country or region is required.";
        }
        

        return newErrors;
    };

    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        const validationErrors = validate();
        
        if (Object.keys(validationErrors).length === 0) {
            console.log("Form submitted successfully:", formData);

        } else {
            setErrors(validationErrors);
        }
    };

    return (

        <div className="flex flex-col justify-between w-11/12 md:flex-row mx-auto bg-white md:p-10 rounded-lg px-4 py-12 mb-12">
            
            {/* Left Section */}
            
            <div className="md:w-1/2 md:pr-8 p-4">
                
                {/* Main Heading */}
                
                <h1 className="text-5xl md:text-5xl font-semibold mb-4 text-[#1A2E6F]">
                    Contact Our Sales Team
                </h1>

                {/* Subtitle and Content */}
                <p className="text-sm md:text-base text-gray-600 mb-6">Let’s explore how Notion can work for you.</p>
                
                <ul className="space-y-4 text-sm md:text-base border rounded-md bg-stone-100 px-3 py-4">
                    
                    <li className="flex items-start">
                        <span className="text-indigo-500 font-bold text-lg mr-2">✓</span>
                        <span className="font-semibold text-black">One flexible tool for your entire company to share knowledge, ship projects, and collaborate.</span>
                    </li>
                    
                    <li className="flex items-start">
                        <span className="text-indigo-500 font-bold text-lg mr-2">✓</span>
                        <span className="font-semibold text-black">Enterprise features to securely manage user access and security.</span>
                    </li>
                    
                    <li className="flex items-start">
                        <span className="text-indigo-500 font-bold text-lg mr-2">✓</span>
                        <span className="font-semibold text-black">Dedicated support to work with you on your setup and help you build the best plan for your company.</span>
                    </li>
                    
                </ul>
                
                <p className="text-xs md:text-sm text-gray-500 mt-6">
                    Looking for support? Visit{" "}
                    <a href="#" className="text-indigo-500 underline">
                        help & documentation
                    </a>
                </p>

            </div>

            {/* Right Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 p-4">
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700">First name *</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                placeholder="John"
                                className="mt-1 block w-full px-2 py-1 border text-black border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />

                            {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}

                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-700">Last name *</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                placeholder="Doe"
                                className="mt-1 block w-full px-2 py-1 border text-black border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700">Work email *</label>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="digiflex.ai@.com"
                        className="mt-1 block w-full px-2 py-1 border text-black border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700">Company name *</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            placeholder="Acme Corp"
                            className="mt-1 block w-full px-2 py-1 border text-black border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700">Company size *</label>
                        <select
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
                        >
                            <option value="">Please select</option>
                            <option value="1-10">1-10</option>
                            <option value="11-50">11-50</option>
                            <option value="51-200">51-200</option>
                            <option value="201-500">201-500</option>
                            <option value="500+">500+</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700">Country or region *</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500 text-black"
                        >
                            <option value="">Please select</option>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Australia">Australia</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-gray-700">Anything else?</label>
                        <textarea
                            name="inquiry"
                            value={formData.inquiry}
                            onChange={handleChange}
                            placeholder="Tell us how we can help..."
                            className="mt-1 block w-full px-2 py-1 border text-black border-gray-300 rounded-md shadow-sm text-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <p className="text-xs text-gray-500 mt-4">
                            By submitting this form, I acknowledge receipt of the{" "}
                        <a href="#" className="text-indigo-500 underline">
                            Notion Privacy Policy
                        </a>
                        .
                        </p>
                        <p className="text-xs text-gray-500">
                        Fields marked with an asterisk(*) are required{" "}.
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-[100%] md:w-[25%] bg-red-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-700 focus:ring-2 focus:ring-red-500 text-sm"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
