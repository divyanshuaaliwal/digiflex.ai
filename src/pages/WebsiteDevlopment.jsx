import React from 'react'
import Website2 from '../container/Services/Custom App/Website Devlopment/Website2'
import Website3 from '../container/Services/Custom App/Website Devlopment/Website3'
import Website4 from '../container/Services/Custom App/Website Devlopment/Website4'
import Website5 from '../container/Services/Custom App/Website Devlopment/Website5'

import { Menu, PhoneIcon as WhatsApp } from "lucide-react"
import bg13 from "../assets/bg13.png" // Import your image

const Website = () => {
  return (
    <>
    <div className="bg-[#172554] min-h-screen flex items-center justify-center px-4">
    <div className="container mx-auto px-4 py-12">
      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
            Modern Website Development Services At Low Prices
          </h1>
          <p className="text-white/90 text-lg">
            Looking to create a modern website for your business or startup? Don’t wait! Hire RankON Technologies, a leading website development company in India, offering affordable and high-quality website development services. We specialize in building custom, responsive websites that enhance user experience, boost your brand, and drive business growth. Whether you're looking for an eCommerce platform, a corporate site, or a startup website, our experienced team uses cutting-edge technologies to deliver solutions tailored to your needs. Choose RankON Technologies for a professional, SEO-friendly, and visually appealing website that helps your business stand out. Take quick action and get started today!
          </p>
          {/* WhatsApp Button */}
          <button className="bg-emerald-500 hover:bg-emerald-600 transition-colors p-3 rounded-full flex items-center gap-2 text-white">
            <WhatsApp className="w-6 h-6" />
            <span>Contact Us</span>
          </button>
        </div>
        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={bg13}
            alt="Website Development Services Illustration"
            className="object-contain max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
      <Website2/>
      <Website3/>
      <Website4/>
      <Website5/>
     

    </>
  )
}

export default Website
